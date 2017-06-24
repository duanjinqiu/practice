/**
 * Created by duan on 2017/6/23.
 */
$(document).ready(function() {
    $('.khdl .help').on('touchstart', function () {
        $('.khdlHelp').fadeIn();
    });
    $('.khdlHelp .close').on('touchstart', function() {
        $('.khdlHelp').fadeOut();
    });
    $('.khfy .help').on('touchstart', function () {
        $('.khfyHelp').fadeIn();
    });
    $('.khfyHelp .close').on('touchstart', function () {
        $('.khfyHelp').fadeOut();
    });
    $('.yhzc .help').on('touchstart', function () {
        $('.yhzcHelp').fadeIn();
    });
    $('.yhzcHelp .close').on('touchstart', function () {
        $('.yhzcHelp').fadeOut();
    });
    $('.yhsj .help').on('touchstart', function () {
        $('.yhsjHelp').fadeIn();
    });
    $('.yhsjHelp .close').on('touchstart', function () {
        $('.yhsjHelp').fadeOut();
    });
});
