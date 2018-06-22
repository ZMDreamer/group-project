    // 导航栏部分
    $(window).scroll(function(){
        if($(document).scrollTop()>=$('.topbox').height()){
            $('.nav').css({'position':'fixed','top': 0 ,'backgroundColor':'#f3f2f2'})
            $('.content').css('marginTop', $('.nav').height() + 30)
            $('.nav').css({'border-radius':'2px','background':'-webkit-linear-gradient(top, gray 0%, lightgray 20%, #fff 50%,silver 80% , lightgray 100%)'})

        }else{
            $('.nav').css('position','static')
            $('.content').css('marginTop',0)
            $('.nav').css({'background':'#f3f2f2','width':'1349px'})
           }
    })
    // 遮盖层动画
    $('.mask').mouseenter(function(){
        $(this).stop().animate({'opacity':'0.8'},1000)
        $('.maskLeft').animate({'opacity':1,'left':'100px','width': '30px'},800)
        $('.maskRight').animate({'opacity':1,'right':'100px','width': '30px'},800)
        $('.playBtn').animate({'opacity':1,'top':'95px'},800)
    }).mouseleave(function(){
        $(this).stop().animate({'opacity':'0'},800)
        $('.maskLeft').stop().animate({'opacity':0 ,'left':'50px','width': '10px'},500)
        $('.maskRight').stop().animate({'opacity':0,'right':'50px' ,'width': '10px'},500)
        $('.playBtn').stop().animate({'opacity':0,'top':'130px'},500)
    
    }).click(function(){
        $('.bigMask').fadeIn(1000)
        $('.out').slideDown(10)
        $('video').slideDown(1000)
    })


   // 退出大蒙层和视频
    $('.out').click(function(){
        $('.bigMask').fadeOut(1000)
        $('.out').slideUp(300)
        $('video').slideUp(300)
        location.reload()
   })


    //   移动视频

//    $('video').mousedown(function(e){
//         var x = e.pageX - $('video').offset().left
//         var y = e.pageY - $('video').offset().top

//         $(document).mousemove(function (e){
//         var videoX = e.pageX - x ;
//         var videoY = e.pageY - y ;
//         $('video').css({'left':'videoX + px' ,'top':'videoY + px'})
//         })
//     }).mouseup(function () {
//     //     // 移除鼠标移动的事件
//         $(document).mousemove(null)
//         })

//     var video = document.querySelector('video');
//     video.onmousedown = function (e) {
//     // 鼠标按下，求鼠标在盒子中的位置
//     var x = e.pageX - video.offsetLeft;
//     var y = e.pageY - video.offsetTop;
//     video.style.cursor = 'move';

//     document.onmousemove = function (e) {
//       // 鼠标移动的时候， 盒子的坐标
//       var loginX = e.pageX - x;
//       var loginY = e.pageY - y;

//       video.style.left = loginX   + 'px';
//       video.style.top = loginY  + 'px';
//     }
//   }

//   document.onmouseup = function () {
//     // 移除鼠标移动的事件
//     document.onmousemove = null;
//   }

    // nav里面所有的li
    $('.navlist li').mouseenter(function(){
        // console.log(33)
        $(this).find('.line').animate({'width':$(this).width(),'opacity': 1},300)
        $(this).find('a').css({'font-size':'16px','color':'blue','font-weight':'bold'})
    }).mouseleave(function(){
        $(this).find('.line').animate({'width':'20px','opacity': 0 },5)
        $(this).find('a').css({'font-size':'14px','color':'black','font-weight':'normal'})
    })


    $(window).scroll(function(){
        if($(document).scrollTop() > $('.s').offset().top + 10){
            console.log(777)
            console.log($('.s').offset().top)
            setTimeout(function(){
                $('.content img').css( 'animation','liAnimaiton 2s ease-out ')
            },10)
        }
    })
       
        