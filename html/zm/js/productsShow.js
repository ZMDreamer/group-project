// 进入动画效果
setTimeout(function () {
    $('#head').css({
        'transform': 'scale(3) rotateZ(360deg)'
    }, 1000)

});
$('.begin> h1').click(function () {
    $('.body').stop().show(1000).siblings('div').stop().hide(500);
});
//模拟搜索框功能
var keyWords = ['苹果4s', '苹果5', '苹果电脑', '苹果8', '苹果X', '华为手机', '小米手机系列', '联想笔记本电脑']
$('.search input:first-child').keyup(function () {
    $('.search input:first-child ').attr('placeholder', ' ');
    var text = this.value;
    var tmpArr = [];
    for (var i = 0; i < keyWords.length; i++) {
        if (keyWords[i].indexOf(text) == 0) {
            tmpArr.push(keyWords[i]);
        }

    }
    if (this.value.length == 0 || tmpArr.length == 0) {
        if ($('.search div')) {
            $('.search div').remove();
        }
        return;
    }
    var box = document.createElement('div');
    $('.search').append(box);
    $('.search div').css({
        'width': '260px',
        'height': '200px',
        'border': '1px solid #10b06F',
        'position': 'absolute',
        'left': '0',
        'bottom': '-202px',
        'backgroundColor': '#fff'
    });
    for (var i = 0; i < tmpArr.length; i++) {
        var list = document.createElement('p');
        list.innerText = tmpArr[i];
        box.appendChild(list);
        $('.search p').css({
            'height': '30px',
            'fontSize': '14px',
            'margin': '5px 5px',
            'lineHeight': '30px'
        });

    }
    $('.search p').hover(function () {
        $(this).css('background', '#10B06F');
    }, function () {
        $(this).css('background', 'white');

    })

}).blur(function () {
    $('.search div').remove();

    $('.search input:first-child ').attr('placeholder', 'iphone7s');

})
// 返回顶部效果
$(document).scroll(function () {
    if ($(document).scrollTop() > 10) {
        $('.toTop').css('display', 'block');
    }else {
        $('.toTop').css('display', 'none');
        
    }
});
$('.toTop > span:first-child').click(function () {
    $('html,body').animate({
        'scrollTop': 0
    }, 400, function () {
        $('.toTop').css('display', 'none');

    })
});
$('.toTop > span').hover(function () {

    $(this).find('strong').show(200);
}, function () {
    $(this).find('strong').stop().hide(100)
})




// 鼠标经过移动下边框
$('.service > ul >li').hover(function () {
    var moveRight = $(this).offset().left
    $('.navBorder').animate({
        'left': moveRight
    }, 100)
})



// 1点击图片调到下面图片给下面图片加一个效果
var index;
$('#user_call > li').click(function () {
    index = $(this).index();
    $('.goods>ul li:eq(' + index + ')').css('box-shadow', '0 2px 10px 0 rgba(0, 0, 0, 0.6)').siblings('li').css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.6)')
})
$('.goods>ul>li').mouseover(function () {

    $(this).css('box-shadow', '0 2px 10px 0 rgba(0, 0, 0, 0.6)')
}).mouseout(function () {
    $(this).css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.6)')
})
// 轮播图自动播放部分
function arcSlip() {
    var oPic = document.getElementById('user_pic');
    var oPrev = getByClass(oPic, 'prev')[0];
    var oNext = getByClass(oPic, 'next')[0];

    var aLi = oPic.getElementsByTagName('li');

    var arr = [];

    for (var i = 0; i < aLi.length; i++) {
        var oImg = aLi[i].getElementsByTagName('img')[0];

        arr.push([parseInt(getStyle(aLi[i], 'left')), parseInt(getStyle(aLi[i], 'top')),
            getStyle(aLi[i], 'zIndex'), oImg.width, parseFloat(getStyle(aLi[i], 'opacity') * 100)
        ]);
    }


    oPrev.onclick = function moveTP() {
        arr.push(arr[0]);
        arr.shift();
        for (var i = 0; i < aLi.length; i++) {
            var oImg = aLi[i].getElementsByTagName('img')[0];

            aLi[i].style.zIndex = arr[i][2];
            startMove(aLi[i], {
                left: arr[i][0],
                top: arr[i][1],
                opacity: arr[i][4]
            });
            startMove(oImg, {
                width: arr[i][3]
            });
        }

    }

    oNext.onclick = function moveTN() {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        for (var i = 0; i < aLi.length; i++) {
            var oImg = aLi[i].getElementsByTagName('img')[0];

            aLi[i].style.zIndex = arr[i][2];
            startMove(aLi[i], {
                left: arr[i][0],
                top: arr[i][1],
                opacity: arr[i][4]
            });
            startMove(oImg, {
                width: arr[i][3]
            });
        }
    }
    var moveTime = setInterval(function () {

        oNext.click();

    }, 1000);
    $('#user_pic').hover(function () {;;
        clearInterval(moveTime);
    }, function () {
        oNext.click()
        moveTime = setInterval(function () {
            oNext.click();
        }, 1500);
    });
    $('#user_call > li').hover(function () {
        $(this).css('boxShadow', '0 5px 20px #10B06F');
    }, function () {
        $(this).css('boxShadow', '0 0 0 #fff')
    })

    function getStyle(obj, name) {
        if (obj.currentStyle) {
            return obj.currentStyle[name];
        } else {
            return getComputedStyle(obj, false)[name];
        }
    }
}

function getByClass(oParent, sClass) {
    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');

    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (var attr in json) {
            var cur = 0;

            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                cur = parseInt(getStyle(obj, attr));
            }

            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur != json[attr]) bStop = false;

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
        }

        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        }

    }, 30)


}
arcSlip();
// // 双十一倒计时模块
var endDate = new Date('2018-11-11 0:0:0');

// 获取span
var spanDay = my$('day');
var spanHour = my$('hour');
var spanMinute = my$('minute');
var spanSecond = my$('second');

setInterval(countdown, 1000);

countdown();
// 倒计时
function countdown() {

    // 计算时间差
    // 当前时间
    var startDate = new Date();
    // 计算两个日期差
    var interval = getInterval(startDate, endDate);

    setInnerText(spanDay, interval.day);
    setInnerText(spanHour, interval.hour);
    setInnerText(spanMinute, interval.minute);
    setInnerText(spanSecond, interval.second);
}
// 价格排序模块
$('.classify >span').hover(function () {
    var index = $(this).index()
    $(this).addClass('current').siblings('span').removeClass('current');
    $('.currentbox > div:eq(' + index + ')').stop().show(500).siblings('div').stop().hide(500)
})
// 鼠标移入到图片上显示下面评论区
$('.goods li').hover(function () {
    $(this).find('div').stop().show(500);
}, function () {
    $(this).find('div').stop().hide(500);

})
// 鼠标移入后显示介绍
$('.goods1 li').hover(function () {
    $(this).find('div').stop().show(500).css({
        'transform': 'rotateY(360deg)',
    });
}, function () {
    $(this).find('div').stop().hide().css({
        'transform': 'rotate(0)'
    });

})


//点击更多加载更多
var flag = true;
$('.contentLeft  span').click(function () {

    if (flag) {
        $(this).parent().parent().animate({
            'overflow': 'visible',
            'height': '190px'
        }, 500)
    } else {
        $(this).parent().parent().animate({
            'overflow': 'hidden',
            'height': '130px'
        }, 500)
    }
    flag = !flag;

})