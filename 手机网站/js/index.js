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
var lis = $('#rotation .item');
var inner = $('#rotation .inner');
var rotation = $('#rotation');
lis.width(windowWidth);
inner.width(lis.length * lis.width());
var i = 1;
setInterval(function () {
    if (i == lis.length) {
        i = 1;
    }

    rotation.animate({scrollLeft: i * windowWidth + 'px'}, 800);
    i++;
}, 4000);