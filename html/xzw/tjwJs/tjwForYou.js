/**
 * Created by ASUS on 2017/5/4.
 */
$(function(){
    $("#clickMy").click(function(){
        $("#clickBox").remove();
        $("#skrollr-body").show(2000);
        $("#audio").animate({"left":0,"top":20},1500,function(){
            $("#audio").animate({"opacity":0.3},10);
        });
        $("#audio").mouseover(function(){
            $("#audio").stop().animate({"opacity":1},500);
        });
        $("#audio").mouseout(function(){
            $("#audio").stop().animate({"opacity":0.3},500);
        });
    });


});