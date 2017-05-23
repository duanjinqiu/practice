/**
 * Created by duan on 2017/5/22.
 */
window.onload = function() {
    var outter1 = document.getElementsByClassName('outter1')[0];
    var inner1 = document.getElementsByClassName('inner1')[0];
    var time;
    var dis;

    scroll1(outter1, 1, 12);

    // ele表示滚动的元素，direction表示滚动的方向，speed表示滚动的速度
    function scroll1(ele, direction, speed) {
        time = setInterval(intervalTime1, speed);
        inner1.onmouseover = function (e) {
            e = e || window.event;
            if (e.target.nodeName.toLowerCase() == 'a') {
                clearInterval(time);
            }
        }
        inner1.onmouseout = function (e) {
            e = e || window.event;
            if (e.target.nodeName.toLowerCase() == 'a') {
                time = setInterval(intervalTime1, speed);
            }
        }
        // 滚动条能够滚动的最大距离是outter能够滚动的宽度减去outter本身的宽度
        dis = outter1.scrollWidth - outter1.clientWidth;
        // 封装定时器函数
        function intervalTime1() {
            ele.scrollLeft += direction * 1;
            if (ele.scrollLeft == dis) {
                ele.scrollLeft = 0;
            }
        }
    }


    var outter2 = document.getElementsByClassName('outter2')[0];
    var inner2 = document.getElementsByClassName('inner2')[0];
    var time2;
    var time2Timeout;
    // 控制滚动的参数
    var dis2;

    scroll2(outter2, 1, 30);

    // ele表示滚动的元素，direction表示滚动的方向，speed表示滚动的速度
    function scroll2(ele, direction2, speed2) {
        time2 = setInterval(intervalTime2, speed2);
        inner2.onmouseover = function (e) {
            e = e || window.event;
            if (e.target.nodeName.toLowerCase() == 'a') {
                // 不仅要清除定时器，还要记得清除延时定时器
                clearInterval(time2);
                clearTimeout(time2Timeout);
            }
        }
        inner2.onmouseout = function (e) {
            e = e || window.event;
            if (e.target.nodeName.toLowerCase() == 'a') {
                time2 = setInterval(intervalTime2, speed2);
            }
        }
        // 滚动条能够滚动的最大距离是outter能够滚动的高度减去outter本身的高度
        dis2 = outter2.scrollHeight - outter2.clientHeight;
        ele.scrollTop = 0;
        // 封装定时器函数
        function intervalTime2() {
            ele.scrollTop += direction2 * 1;
            if (ele.scrollTop == dis2) {
                ele.scrollTop = 0;
            }
            if (ele.scrollTop % 21 == 0) {
                clearInterval(time2);
                time2Timeout = setTimeout(function() {
                    time2 = setInterval(intervalTime2, speed2);
                }, 2000);
            }

        }
    }


    var outter3 = document.getElementsByClassName('outter3')[0];
    var inner3 = document.getElementsByClassName('inner3')[0];
    var time3;
    var time3Timeout;
    // 控制滚动的参数
    var dis3;

    scroll3(outter3, 1, 30);

    // ele表示滚动的元素，direction表示滚动的方向，speed表示滚动的速度
    function scroll3(ele, direction3, speed3) {
        time3 = setInterval(intervalTime3, speed3);
        inner3.onmouseover = function (e) {
            e = e || window.event;
            if (e.target.nodeName.toLowerCase() == 'a') {
                // 不仅要清除定时器，还要记得清除延时定时器
                clearInterval(time3);
            }
        }
        inner3.onmouseout = function (e) {
            e = e || window.event;
            if (e.target.nodeName.toLowerCase() == 'a') {
                time3 = setInterval(intervalTime3, speed3);
            }
        }
        // 滚动条能够滚动的最大距离是outter能够滚动的高度减去outter本身的高度
        dis3 = outter3.scrollHeight - outter3.clientHeight;
        ele.scrollTop = 0;
        // 封装定时器函数
        function intervalTime3() {
            ele.scrollTop += direction3 * 1;
            if (ele.scrollTop == dis3) {
                ele.scrollTop = 0;
            }
        }
    }
}