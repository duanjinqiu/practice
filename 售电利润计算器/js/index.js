/**
 * Created by duan on 2017/6/23.
 */
$(document).ready(function() {
    var contractHelp = $('.contractHelp');
    $('#contract .help').on('touchstart', function() {
        contractHelp.fadeIn();
    });
    $('.contractHelp .close').on('touchstart', function () {
        contractHelp.fadeOut();
    });
});