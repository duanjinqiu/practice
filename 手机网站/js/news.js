/**
 * Created by duan on 2017/6/22.
 */
$('.menu').on('touchstart', function(e) {
    $('.second-menu').show();
    e.preventDefault();
});
$('.closebt').on('touchstart', function (e) {
    $('.second-menu').hide();
    e.preventDefault();
});
var windowWidth = $(window).width();
var lis = $('#rotation .inner .item');
var inner = $('#rotation .inner');
var rotation = $('#rotation');
lis.width(windowWidth);
inner.width(lis.length * lis.width());
var span = $('.citem span');
for (var i = 0; i < span.length; i++) {
    span[i].index = i;
}

span.on('touchstart', function () {
    $(this).addClass('active');
    rotation.stop(true).animate({scrollLeft: this.index * windowWidth}, 800);
    $(this).parent().siblings().children().removeClass();
});