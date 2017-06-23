/**
 * Created by duan on 2017/6/19.
 */

let start = $('.start');
let inner = $('ul.inner');
let lis = $('.inner li');
let windowWidth = $(window).width();
let windowHeight = $(window).height();
lis.width(windowWidth);
lis.height(windowHeight);
inner.width(windowWidth * 3);
inner.height(windowHeight);
start.on({
    'touchstart': touchstart,
    'touchmove': touchmove,
    'touchend': touchend,
});
for(i in lis){
    lis[i].index = i;
}
e.target == lis[i]
let startX, moveX, endX;
let startScrollLeft = 0;
function touchstart(e) {
    start.bind('touchmove', touchmove);
    startX = e.originalEvent.targetTouches[0].clientX;
    startScrollLeft = start.scrollLeft();
}
var i = 0;
function touchmove(e) {
    moveX = startX - e.originalEvent.changedTouches[0].clientX;
    start.scrollLeft(startScrollLeft + moveX);
    if (moveX > 80) {
        i++;
        console.log(i)

        start.stop(true).animate({scrollLeft: lis.width() * i}, 'slow');

        start.unbind('touchmove');
        // start.unbind('touchstart');
        // setTimeout(function() {
        //     start.bind('touchstart');
        // }, 1000);
    } else if (moveX < -80) {
        i--;
        start.unbind('touchmove');
        start.stop(true).animate({scrollLeft: lis.width() * i}, 'slow');
    }
}
function touchend(e) {
    endX = e.originalEvent.changedTouches[0].clientX;
    // console.log('endX: ' + endX);

}
// start.scrollLeft(200);
// console.log(start.scrollLeft())




// var tempData;
// $.ajax({
//     url: 'http://localhost:5500/restaurant',
//     cache: false,
//     dataType: 'json',
//     success: function (data, status, xhr) {
//         createEle(data);
//         tempData = data;
//     },
//     error: function (xhr, status, err) {
//         console.log('ajax请求失败');
//     }
// });
// function createEle(data) {
//     for (let i in data) {
//
//
//         var tip;
//         var start;
//         if (data[i].tip == 0) {
//             tip = `<span class="psf">免配送费</span>`;
//         } else {
//             tip = `<span class="psf">￥${data[i].tip}</span>配送费`;
//         }
//         if (data[i].start == 0) {
//             start = `<span class="qs">0</span>`;
//         } else {
//             start = `<span class="qs">￥${data[i].start}</span>起送`;
//         }
//
//
//         $('.rsl').append(`<div class="item">
//         <div class="inner">
//             <div class="pic">
//                 <img src="image/index/p.png" alt="">
//             </div>
//             <div class="con">
//                 <div class="ct">
//                     <div class="ct-top">
//                         <div class="he">
//                             <h4 class="Fleft resName">${data[i].name}</h4>
//                             <p class="Fright">${start}</p>
//                         </div>
//                         <div class="he">
//                             <ul class="Fleft">
//                                 <li>
//                                     <div class="star_bg">
//                                         <a class="star"></a>
//                                         <a class="star"></a>
//                                         <a class="star"></a>
//                                         <a class="star"></a>
//                                         <a class="star"></a>
//                                     </div>
//                                 </li>
//                                 <li>(53)</li>
//                                 <li>月售167单</li>
//                             </ul>
//                             <p class="Fright">${tip}</p>
//                         </div>
//                         <div class="he">
//                             <p class="distance">${data[i].distance.toFixed(1)}千米</p>
//                             <p class="Fright">
//                                 <i class="emoji zf iconfont icon-xiaolian"></i>
//                                 <span class="piao zf">票</span>
//                                 <span class="bao zf">保</span>
//                                 <span class="ps"><i class="iconfont icon-eliaomo"></i>饿配送</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="bottom">
//                     <p><span class="aa j">减</span>满120元减30元</p>
//                     <p><span class="aa d">抵</span>在该商家用抵价券订餐可抵10元</p>
//                 </div>
//             </div>
//         </div>
//     </div>`);
//
//         // for (let j = 0; j < data[i].star; j++) {
//         //     $('.star${j}').attr('class', 'starActive');
//         //     console.dir($('.star'));
//         // }
//         // console.log(data[i])
//         let starP = $(".star_bg");
//         for(let j = 0; j < data[i].star; j++) {
//             // console.dir(starP[i]);
//             starP[i].children[j].setAttribute('class', 'starActive');
//
//         }
//
//     }
// }
// let x = 1;
// $('.px').on('click', function(e) {
//         x *= -1;
//         if (x < 0) {
//             $('.second-menu').show();
//         } else {
//             $('.second-menu').hide();
//         }
//
//     if ($(e.target).text() == '距离') {
//         tempData.sort(function(a, b) {
//             return a.distance - b.distance;
//         });
//         $('.rsl .item').remove();
//         createEle(tempData);
//     }
//
//     if ($(e.target).text() == '好评') {
//         tempData.sort(function(a, b) {
//             return b.star - a.star;
//         });
//         $('.rsl .item').remove();
//         createEle(tempData);
//     }
// });
//
// var city;
// function myFun(result){
//     var cityName = result.name;
//     $('.address').text(cityName);
//     city = cityName;
// }
// var myCity = new BMap.LocalCity();
// myCity.get(myFun);
//
// var geolocation = new BMap.Geolocation();
// geolocation.getCurrentPosition(function(r){
//     if(this.getStatus() == BMAP_STATUS_SUCCESS){
//         var mk = new BMap.Marker(r.point);
//
//         $.ajax({
//             url: `http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=${r.point.lat},${r.point.lng}&output=json&ak=tzSP6K8ZqtQPgQxLCT9rarDMCNrBH4xb`,
//             cache: false,
//             dataType: 'jsonp',
//             success: function (data, status, xhr) {
//                 if (data.result.formatted_address != '') {
//                     $('.address').text(data.result.formatted_address);
//                 }
//             },
//             error: function (xhr, status, err) {
//                 console.log('请求出错了');
//             }
//         });
//     }
//     else {
//         alert('failed'+this.getStatus());
//     }
// },{enableHighAccuracy: true});
//
// $('#inputValue').bind('input propertychange' ,function() {
//     $('.suggestion').show();
//     var inputValue = $('#inputValue').val();
//     $.ajax({
//         url: `http://api.map.baidu.com/place/v2/search?q=${inputValue}&region=${city}&output=json&ak=tzSP6K8ZqtQPgQxLCT9rarDMCNrBH4xb`,
//         cache: false,
//         dataType: 'jsonp',
//         success: function (data, status, xhr) {
//             $('.sugItem').remove();
//             for (i in data.results) {
//                 $('.suggestion').append(`<li class="sugItem">${data.results[i].name}</li>`);
//             }
//         },
//         error: function (xhr, status, err) {
//             console.log('请求出错');
//         }
//     });
// });
//
// $('body').on('click', function() {
//     $('.suggestion').hide();
// });