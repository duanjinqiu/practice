/**
 * Created by duan on 2017/6/23.
 */
$(document).ready(function() {
    $('#header .data').on('touchstart', function () {
        $('#one').show();
        $('#header .data').addClass('active');
        $('#two').hide();
        $('#header .result').removeClass('active');
    });

    $('#header .result').on('touchstart', function () {
        $('#one').hide();
        $('#header .data').removeClass('active');
        $('#two').show();
        $('#header .result').addClass('active');
    });

    $('#contract .mode').on('change', function (e) {
        var a = $('#contract .mode').val();
        var ms = $('#contract .m');
        if (a == '') {
            $('#contract .m').hide();
        }
        if (a == 1) {
            for (var i = 0; i < ms.length; i++) {
                $(ms[i]).hide();
            }
            $('#contract .qdlbpc').show();
        }
        if (a == 2) {
            for (var i = 0; i < ms.length; i++) {
                $(ms[i]).hide();
            }
            $('#contract .fc').show();
        }
        if (a == 3) {
            for (var i = 0; i < ms.length; i++) {
                $(ms[i]).hide();
            }
            $('#contract .bdfc').show();
        }
    });
    var contractHelp = $('.contractHelp');
    $('#contract .help').on('touchstart', function() {
        contractHelp.fadeIn();
    });
    $('.contractHelp .close').on('touchstart', function () {
        contractHelp.fadeOut();
    });
    $('input').blur(function(e) {
        if (e.target.value.match(/^(\-|\+)?\d+(\.\d+)?$/)) {

        }else if (e.target.value != '') {
            e.target.value = '';
            $(this).attr('placeholder','请输入数字');
            $(this).focus();
        }
    });

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

    function jsdl() {
        var yc = $('#yc').val();    //预测电量
        var sj = $('#sj').val();    //实际用电量
        var fj = $('#fj').val();    //双边协商月分解电量
        var jc = $('#jc').val();    //双边协商价差
        var jj = $('#jj').val();    //月度竞价成交电量
        var js = $('#js').val();    //月度出清结算价
        var pc = $('#pc').val();    //偏差范围
        var htmls = $('#htmls').val();  //合同模式

        console.log(yc, sj, fj, jc, jj, js, pc, htmls); // 打印获取到的值


        var pcfw = (sj - yc) / yc;  // 计算得到的偏差范围
        var khdl;

        if (pcfw == pc) {   // 如果计算得到的偏差范围等于输入的偏差范围
            khdl = 0;
        }else {
            khdl = '不在范围内的值';
        }
        // 计算月度收益
        var ydsy = jc * jj;

        $('#one').hide();
        $('#header .data').removeClass('active');
        $('#two').show();
        $('#header .result').addClass('active');

        var outputKhdl = $('#khdl');  //第二页考核电量输出栏
        var outputYdsy = $('#ydsy');  // 月度收益

        outputKhdl.text(khdl);
        outputYdsy.text(ydsy);
    }

    $('#cs').on('touchstart', function () {
        jsdl();
    });

});