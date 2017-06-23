/**
 * Created by duan on 2017/6/21.
 */
var data = [
    {
        "id": "10001",
        "name": "大白菜",
        'price': 5,
    },
    {
        "id": "12001",
        "name": "小青菜",
        'price': 6,
    },
    {
        "id": "12301",
        "name": "包菜",
        'price': 7,
    },
    {
        "id": "12341",
        "name": "小包菜",
        'price': 5,
    },
    {
        "id": "12345",
        "name": "白菜",
        'price': 6,
    }
];
var proNameInput = $('.proName-input');
proNameInput.on('input propertychange', function () {
    var inputValue = proNameInput.val();
    $('.show .item').remove();
    var regStr = "/^" + inputValue + "/";
    var reg = eval(regStr);
    for (var x in data) {
        if (data[x]["id"].match(reg)) {
            $('.show').append("\n                <li class=\"item itemStyle\">\n                    <span class=\"left-num num\">" + data[x]['id'] + "</span>\n                    <span class=\"left-name name\">" + data[x]['name'] + "</span>\n                    <span class=\"left-price price\">\uFFE5" + data[x]['price'] + "</span>\n                </li>\n            ");
        }
    }
});
var i = -1;
$('.proName-input').keydown(function (e) {
    var e = e || window.event;
    if (38 == e.keyCode && e.keyCode < 40) {
        e.preventDefault();
    }
    i = -1;
});
$('.proName').keydown(function (e) {
    var showItem = $('.show .item');
    if (e.keyCode == 40) {
        i++;
        for (var j = 0; j < showItem.length; j++) {
            $(showItem[j]).removeClass('active');
        }
        $(showItem[i]).addClass('active');
        if (i > showItem.length - 1) {
            i = showItem.length;
        }
    }
    if (e.keyCode == 38) {
        for (var j = 0; j < showItem.length; j++) {
            $(showItem[j]).removeClass('active');
        }
        i--;
        $(showItem[i]).addClass('active');
        if (i < 0) {
            i = -1;
        }
    }
});
