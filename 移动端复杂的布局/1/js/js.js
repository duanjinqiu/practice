/**
 * Created by duan on 2017/5/14.
 */
$(function() {
    var a = $('.sign');
    a.on('touchstart', touchStart);
    a.on('touchend', touchEnd);
    function touchStart() {
        $(this).addClass("ho");
    }
    function touchEnd() {
        $(this).removeClass('ho');
    }
});