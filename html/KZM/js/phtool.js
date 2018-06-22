//
// 下拉列表
var lli = document.getElementById('lli');
var u1 = document.getElementById('u1');
var u2 = document.getElementById('u2');
var u3 = document.getElementById('u3');
var phone = document.getElementById('phone')
var phoneList = document.getElementById('phoneList');
var lis1 = u1.children;
// var app = uu2.children[0];
var lis2 = u2.children;
var lis3 = u3.children;
//第一列是事件
for (var j = 0; j < lis1.length; j++) {
    lis1[j].index = j;
    lis1[j].onmouseover = function () {
        if (this.index == 1) {
            phone.style.display = "block";
        }else{
            phone.style.display = "none";
        }
        for (var j = 0; j < lis1.length; j++) {
            lis1[j].style.backgroundColor = "";
        }
        this.style.backgroundColor = "#333";
    };
    lis1[j].onmouseout = function () {
        if(this.index !=1)
            this.style.backgroundColor = "";
    }
    // for (var j = 0; j < lis1.length; j++) {
    //     lis1[j].style.backgroundColor = "";
    // }
}
// var index1 = null;
    for (var k = 0; k < lis2.length; k++) {
        lis2[k].index = k;
        // index1 = lis2[k].index;
        phoneList.style.display="none";
        lis2[k].onmouseover = function () {
        phoneList.style.display = "block";
        //lis3和lis2的长度不一样
        for (var l = 0; l < lis3.length; l++) {
            lis3[l].style.display = "none";
        }
        lis3[this.index].style.display = "block";
        for (var j = 0; j < lis2.length; j++) {
            lis2[j].style.backgroundColor = "";
        }
        this.style.backgroundColor = "#333";
        // lis3[this.index].style.backgroundColor = "#0091FF";
    };
}
phone.onmouseover = function () {
    phone.style.display = "block";
};
phone.onmouseout = function () {
    phone.style.display = "none";
    // u1.children[1].style.backgroundColor = "";
};
lli.onmouseout = function () {
    phone.style.display = "none";
};
phoneList.onmouseover = function () {
    phone.style.display = "block";
};
phoneList.onmouseout = function () {
    phone.style.display = "none";
    u1.children[1].style.backgroundColor="";
};


// 图片移动效果
var bigBox = document.getElementById("bigBox");
var Box1 = document.getElementById("Box1");
var Box2 = document.getElementById("Box2");
var Box3 = document.getElementById("Box3");
var Box4 = document.getElementById("Box4");
var Box5 = document.getElementById("Box5");
bigBox.onmouseenter = function () {
    Box1.style.transform = "rotateZ(360deg)";
    Box2.style.transform = "translateX(560px) translateY(225px)";
    Box3.style.transform = "translateX(-280px) translateY(225px)";
    Box4.style.transform = "translateX(280px) translateY(-225px)";
    Box5.style.transform = "translateX(-560px) translateY(-225px)";
};
bigBox.onmouseleave = function () {
    Box1.style.transform = "rotateZ(0deg)";
    Box2.style.transform = "translateX(0px) translateY(0px)";
    Box3.style.transform = "translateX(0px) translateY(0px)";
    Box4.style.transform = "translateX(0px) translateY(0px)";
    Box5.style.transform = "translateX(0px) translateY(0px)";
}


//最后一行图片的遮罩跟着鼠标动画移动
var list = document.getElementById("list");
var mask9 = document.getElementById("mask9");
var liss = list.getElementsByTagName("li");
for (var f = 0; f < liss.length; f++) {
    liss[f].index = f;
    liss[f].onmouseover = function () {

        if (this.index > 3) {
            animate1(mask9, { "top": 225, "left": (this.index - 4) * 280 });
            this.style.overflow = "hidden";
            for (var i = 0; i < liss.length; i++) {
                animate1(liss[i].children[0], { "width": 280, "height": 225 })
            }
            animate1(this.children[0], { "width": 420, "height": 337 })

        } else {
            animate1(mask9, { "top": 0, "left": this.index * 280 });
            this.style.overflow = "hidden";
            for (var j = 0; j < liss.length; j++) {
                animate1(liss[j].children[0], { "width": 280, "height": 225 })
            }
            animate1(this.children[0], { "width": 420, "height": 337 })

        }
    }
}
// 遮罩层的动画函数
function animate1(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

// 热门机型的遮罩层
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById('s5');
var s6 = document.getElementById('s6');

t1.onmouseover = function () {
    s1.style.opacity = 0.5;
    this.style.overflow = "hidden";
};
t1.onmouseout = function () {
    s1.style.opacity = 0;
};
t2.onmouseover = function () {
    s2.style.opacity = 0.5;
    this.style.overflow = "hidden";
};
t2.onmouseout = function () {
    s2.style.opacity = 0;
};
t3.onmouseover = function () {
    s3.style.opacity = 0.5;
    this.style.overflow = "hidden";
};
t3.onmouseout = function () {
    s3.style.opacity = 0;
};
t4.onmouseover = function () {
    s4.style.opacity = 0.5;
    this.style.overflow = "hidden";
};
t4.onmouseout = function () {
    s4.style.opacity = 0;
};
b1.onmouseover = function () {
    s5.style.opacity = 0.5;
    this.style.overflow = "hidden";
};
b1.onmouseout = function () {
    s5.style.opacity = 0;

};
b2.onmouseover = function () {
    s6.style.opacity = 0.5;
    this.style.overflow = "hidden";
};
b2.onmouseout = function () {
    s6.style.opacity = 0;
};