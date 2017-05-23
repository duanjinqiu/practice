/**
 * Created by duan on 2017/5/23.
 */
var one = document.getElementsByClassName('one')[0];
var imgone = document.getElementsByClassName('imgone')[0];
var textone = document.getElementsByClassName('textone')[0];
var two = document.getElementsByClassName('two')[0];
var imgtwo = document.getElementsByClassName('imgtwo')[0];
var texttwo = document.getElementsByClassName('texttwo')[0];
one.onclick = function() {
    imgone.setAttribute('class', 'img on');
    textone.innerHTML = 'Radio is on';
    texttwo.innerHTML = 'Radio is off';
    imgtwo.setAttribute('class', 'img');
}
two.onclick = function() {
    imgtwo.setAttribute('class', 'img on');
    texttwo.innerHTML = 'Radio is on';
    textone.innerHTML = 'Radio is off';
    imgone.setAttribute('class', 'img')
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
}

var right = document.getElementsByClassName('right')[0];
var chinput = document.getElementsByClassName('chinput')[0];
var z = 1;
chinput.onclick = function() {
    z *= -1;
    if (z < 0) {
        right.style.display = 'none';
    }else {
        right.style.display = 'block';
    }
}
