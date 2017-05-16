/**
 * Created by duan on 2017/5/17.
 */
$(function() {
    $('body').on('touchstart', function(event) {
        if (event.target.className == 'yeara' || event.target.className == 'iconfont icon-jiantouxiangxia') {
        $('.ul').attr('style', 'display: block');
        }else {
            $('.ul').removeAttr('style');
        }
    });
});