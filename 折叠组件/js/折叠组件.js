/**
 * Created by duan on 2017/5/23.
 */
var first = document.getElementsByClassName('first')[0];
var secondMenu = document.getElementsByClassName('second-menu')[0];
var second = document.getElementsByClassName('second')[0];
var thirdMenu = document.getElementsByClassName('third-menu')[0];
hehe(second, thirdMenu);
hehe(first, secondMenu);
var x = 1;
function hehe(parentNodes, childNodes) {
    parentNodes.onclick = function(e) {
        e = e || window.event;
        x *= -1;
        if (window.getComputedStyle(childNodes, null).display ==  'none') {
            childNodes.style.display = 'block';
            parentNodes.setAttribute("class", 'firstChange');
        }else {
            childNodes.style.display = 'none';
            parentNodes.setAttribute("class", 'first');
        }
        window.event? window.event.cancelBubble = true : e.stopPropagation();
    }
}
