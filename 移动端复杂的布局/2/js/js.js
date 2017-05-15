/**
 * Created by duan on 2017/5/15.
 */
$(function() {
   var bt = $('.bt');
   bt.on('touchstart', touchStart);
   bt.on('touchend', touchEnd);
   function touchStart() {
       $(this).addClass('ho');
   }
   function touchEnd() {
       $(this).removeClass('ho');
   }
   var input = $('input');
   var temp;
   input.focus(function() {
       temp = $(this).attr('placeholder');
       $(this).removeAttr('placeholder');
   });
   input.blur(function() {
      $(this).attr('placeholder', temp);
   });
});