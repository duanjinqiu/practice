/**
 * Created by duan on 2017/5/23.
 */
var onoff = document.getElementsByClassName('onoff')[0];
var img = document.getElementsByClassName('img')[0];
var span = document.getElementsByTagName('span')[0];
var x = 1;
onoff.onclick = function() {
    x *= -1;
    if (x < 0) {
        img.setAttribute('class', 'on');
        span.innerHTML = 'Radio is-on';
    }else {
        img.setAttribute('class', 'img');
        span.innerHTML = 'Radio is-off'
    }

}

var sw = document.getElementsByClassName('sw')[0];
var image = document.getElementsByClassName('image')[0];
var text = document.getElementsByClassName('text')[0];
var y = 1;
sw.onclick = function() {
    y *= -1;
    if (y < 0 ) {
        sw.style.backgroundColor = '#cbd2d8';
        image.setAttribute('class', 'imageOff');
        text.setAttribute('class', 'textOff');
        text.innerHTML = 'OFF';
    }else {
        sw.style.backgroundColor = '#34495e';
        image.setAttribute('class', 'image');
        text.setAttribute('class', 'text');
        text.innerHTML = 'ON';
    }
    console.log(sw);
}

var checkLabel = document.getElementsByClassName('checkLabel')[0];
var right = document.getElementsByClassName('right')[0];
var z = 1;
checkLabel.onclick = function() {
    z *= -1;
    if (z < 0) {
        right.style.display = 'none';
    }else {
        right.style.display = 'block';
    }
}
