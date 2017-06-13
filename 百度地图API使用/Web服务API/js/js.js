/**
 * Created by duan on 2017/6/1.
 */
$(function() {
    $('.submitBt').click(function() {
        var value = $('.inputValue').val();
        var typeA= $('.inputType').val();
        if (value == '') {

        } else {
            var latitude, longitude;
            // 通过地址获取坐标
            $.ajax({
                url: 'http://api.map.baidu.com/geocoder/v2/?address=' +  value +'&output=json&ak=tzSP6K8ZqtQPgQxLCT9rarDMCNrBH4xb&callback=showLocation',
                dataType: 'jsonp',
                cache: false,
                success: function(data, status, xhr) {
                    latitude = data.result.location.lat.toFixed(6);
                    longitude = data.result.location.lng.toFixed(6);
                    console.log(latitude , longitude);
                    // 通过坐标获取信息
                    $.ajax({
                        url: 'http://api.map.baidu.com/place/v2/search?query=' + typeA + '&page_size=10&page_num=0&scope=1&location=' + latitude + ',' + longitude + '&radius=2000&output=json&ak=tzSP6K8ZqtQPgQxLCT9rarDMCNrBH4xb',
                        dataType: 'jsonp',
                        cache: false,
                        success: function(data, status, xhr) {
                            $('.item').remove();
                            $('.bt').css('display', 'block');
                            for (var i in data.results) {
                                    var item = $('<div class="item"></div>');
                                    var name = $('<h4 class="name"></h4>').html(data.results[i].name);
                                    var address = $('<div class="address"></div>').html('地址: ' + data.results[i].address);
                                    var tel = $('<div class="tel"></div>').html('电话: ' + data.results[i].telephone);
                                    item.append(name);
                                    item.append(address);
                                    item.append(tel);
                                    $('.message').append(item);
                                }

                            var pageNum = 0;
                            // 翻页按钮
                            $('.next').click(function() {
                                console.log(pageNum);
                                console.log(data);
                                if (pageNum > Math.ceil(data.total / 10) - 2) {
                                    $('.tip').html('没有下一页了');
                                    return false;
                                } else {
                                    pageNum++;
                                    $('.tip').html('');
                                    $('.item').remove();
                                    bt(pageNum);
                                }
                            });
                            $('.previous').click(function() {
                                if (pageNum <= 0) {
                                    $('.tip').html('没有上一页了');
                                    return false;
                                } else {
                                    pageNum--;
                                    $('.tip').html('');
                                    $('.item').remove();
                                    console.log('previous -- 后: ' + pageNum);
                                    bt(pageNum);
                                }
                            });
                            function bt(pageNum) {
                                $.ajax({
                                    url: 'http://api.map.baidu.com/place/v2/search?query=' + typeA + '&page_size=10&page_num=' + pageNum + '&scope=1&location=' + latitude + ',' + longitude + '&radius=2000&output=json&ak=tzSP6K8ZqtQPgQxLCT9rarDMCNrBH4xb',
                                    dataType: 'jsonp',
                                    cache: false,
                                    success: function(data, status, xhr) {
                                        for (var i in data.results) {
                                            var item = $('<div class="item"></div>');
                                            var name = $('<h4 class="name"></h4>').html(data.results[i].name);
                                            var address = $('<div class="address"></div>').html('地址: ' + data.results[i].address);
                                            var tel = $('<div class="tel"></div>').html('电话: ' + data.results[i].telephone);
                                            item.append(name);
                                            item.append(address);
                                            item.append(tel);
                                            $('.message').append(item);
                                        }
                                    }
                                });
                            }



                        },
                        error: function(xhr, status, error) {
                            console.log(error);
                        }
                    });

                },
                error: function(xhr, status, error) {
                    console.log(error);
                }
            });

        }
        return false;
    });



        // $.ajax({
        //     url: 'http://api.map.baidu.com/place/v2/search?query=宾馆&page_size=10&scope=1&location=31.878396,120.256626&radius=2000&output=json&ak=tzSP6K8ZqtQPgQxLCT9rarDMCNrBH4xb',
        //     dataType: 'jsonp',
        //     cache: false,
        //     success: function(data, status, xhr) {
        //         console.log(data.total);
        //         length = data.results.length;
        //     },
        //     error: function(xhr, status, error) {
        //         console.log(error);
        //     }
        // });




});