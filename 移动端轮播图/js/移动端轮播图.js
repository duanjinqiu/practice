/**
 * Created by duan on 2017/5/24.
 */
var outter = g('outter');
var inner = g('inner');
var time;
setTimeout(function () {
    time = setInterval(scroll, 1);
}, 2000);

var picWidth = outter.clientWidth;

function scroll() {
    outter.scrollLeft++;
    if (!(outter.scrollLeft % picWidth)) {
        clearInterval(time);
        setTimeout(function() {
           time = setInterval(scroll, 1);
        }, 2000);
    }
    if (outter.scrollLeft == (inner.clientWidth - picWidth)) {
        outter.scrollLeft = 0;
    }
}
function g(cla) {
    return document.getElementsByClassName(cla)[0];
}

outter.ontouchstart = function(e) {
    e = e || window.event;
   console.log(e.touches[0].pageX);
}