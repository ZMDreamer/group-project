/**
 * Created by HP on 2017/5/4.
 */
$(function () {
    //µ¼º½½î¶·ÔÆÌØÐ§
    $(".nav>ul>li").mouseenter(function () {
        var target = $(this).position().left;
        $(".cloud").stop().animate({"left": target}, 200);
    });


    $(".bg").mouseover(function () {
        $(this).find("img")[0].src = "imgzy/1.jpg";
    });
    $(".bg").mouseout(function () {
        $(this).find("img")[0].src = "imgzy/screen1.png";
    });

    $(".shop>ul>li").mouseover(function () {
        var index = $(this).index();
        $(this).find(".left").stop().animate({"width":"112px"},400);
        $(this).find(".right").stop().animate({"width":"112px"},400);
        $(this).children("a").find("b").removeClass("bg" + (index + 1) + "");
        $(this).children("a").find("b").addClass("bgc" + (index + 1) + "");
        $(this).children("a").find("i").css("color", "#18B174");
    });


    $(".shop>ul>li").mouseout(function () {
        var index = $(this).index();
        $(this).find(".left").stop().animate({"width":""},400);
        $(this).find(".right").stop().animate({"width":""},400);
        $(this).children("a").find("b").removeClass("bgc" + (index + 1) + "");
        $(this).children("a").find("b").addClass("bg" + (index + 1) + "");
        $(this).children("a").find("i").css("color", "");
    });

    $(".pic1>a>img").mouseover(function () {
        $(this).stop().animate({"width": "620px", "height": "320px"}, 500);
    }).mouseout(function () {
        $(this).stop().animate({"width": "610px", "height": "310px"}, 500);
    });
    $(".pic2>a>img").mouseover(function () {
        $(this).stop().animate({"width": "510px", "height": "320px"}, 500);
    }).mouseout(function () {
        $(this).stop().animate({"width": "500px", "height": "310px"}, 500);
    });
    $(".pic3>a>img").mouseover(function () {
        $(this).stop().animate({"width": "510px", "height": "320px"}, 500);
    }).mouseout(function () {
        $(this).stop().animate({"width": "500px", "height": "310px"}, 500);
    });
    $(".pic4>a>img").mouseover(function () {
        $(this).stop().animate({"width": "620px", "height": "320px"}, 500);
    }).mouseout(function () {
        $(this).stop().animate({"width": "610px", "height": "310px"}, 500);
    });
});