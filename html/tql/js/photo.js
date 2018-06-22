
 // 轮播图
 $(function(){
        $("#bigli>li").clone().appendTo($("#bigli"));
        var pic=0;
        $("#right").click(function(){
            if(pic===$("#bigli>li").length-5){
                $("#bigli").css("left","0px");
                pic=0;
            }
            pic++;
            $("#goodmg")[0].src=$("#bigli").find("img")[pic].src;
            $("#mg>img")[0].src=$("#bigli").find("img")[pic].src;
            $("#bigli").stop().animate({"left":-55*pic})
        });
        $("#left").click(function(){
            if(pic===0){
                $("#bigli").css("left",-55*($("#bigli>li").length-5)+"px");
                pic=$("#bigli>li").length-5
            }
            pic--;
            $("#goodmg")[0].src=$("#bigli").find("img")[pic].src;
            $("#mg>img")[0].src=$("#bigli").find("img")[pic].src;
            $("#bigli").stop().animate({"left":-55*pic+"px"});
        });
        $("#bigli").children("li").click(function(){
            $("#goodmg")[0].src=$(this).children("img")[0].src;
            $("#mg>img")[0].src=$(this).children("img")[0].src;
        });
        

        // 分期
         $(".fimg").mouseover(function(){
                $(".payment").stop().show(100)
            });
            $(".fimg").mouseout(function(){
                $(".payment").stop().hide(100)
            });


        // 加减
        var number=1;
        $(".sub").click(function(){
            if($(".number").text()<=1){
                return;
            }
            number--;
            $(".number").text(number);
        });
        $(".add").click(function(){
            number++;
            $(".number").text(number);
        });
        
        // tab栏切换
         $(".footerbody-top span").mouseover(function(){
                var index=$(this).index();
                $(this).siblings("span").removeClass("footspn1");
                $(this).addClass("footspn1");
                console.log($(".footerbody-bottom>div:eq("+index+")"));
                $(".footerbody-bottom>div:eq("+index+")").siblings("div").removeClass("footerbodykashi");
                $(".footerbody-bottom>div:eq("+index+")").addClass("footerbodykashi")
            });

         $(".footerbody-img>img").mouseover(function () {
             $(this).css("animation","none")
         })

    })