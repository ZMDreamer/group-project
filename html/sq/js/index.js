// $('element-id-or-class-goes-here').sparkleHover();

$('#header').show(800)
$('.content li').mouseover(function(){
    $(this).find('img').addClass('imgchange')
})
$('.content li').mouseout(function () {
    $(this).find('img').removeClass('imgchange')
})
$('.centre li').mouseover(function () {
    $(this).find('img').addClass('imgchange')
})
$('.centre li').mouseout(function () {
    $(this).find('img').removeClass('imgchange')
})
$('.bant').mouseover(function(){
    $('.bant span').stop().show(500)
})
$('.bant').mouseout(function () {
    console.log(666)
    $('.bant span').stop().hide(500)
})
// $(document).ready(function(){
//       console.log(1)
//     $('#toTop').animate({
//         'transform': 'rotate(360deg)'
//     }, 2000)
// })
var i = 1;
setInterval(function () {
        var ii = i * 360 + 'deg'
        var iii = 'rotate('+ii+')'
        $('#toTop').css('transform', iii)
        i++
    }, 1500);

$('#toTop').click(function () {
        document.body.scrollTop=0;
        document.documentElement.scrollTop = 0;

    })
$(document).ready(function () {
    'use strict';

    
    $('#sss').sparkleHover({
    colors: ['gold','silver', 'teal', 'skyblue','black'],
    num_sprites: 72,
    lifespan: 3000,
    radius: 1000,
    sprite_size: 14,
        shape: "triangle",
    

});
})
      var num = 0;
      $("#j_silder_outer .img-item").each(function (index, el) {
          $(this).css({
              "left": $(this).width() * index + "px",
              /*让每个img-item延时一定时间执行动画*/
              "transitionDelay": index * 0.3 + "s"
          });
          $(this).find(".img").css({
              "backgroundPosition": -$(this).width() * index + "px"
          });;
      });

      $(".prev").on("click", function () {
          $("#j_silder_outer .img-item").css("transform", "rotateX(" + (++num * 90) + "deg)");
      });

      $(".next").on("click", function () {
          $("#j_silder_outer .img-item").css("transform", "rotateX(" + (--num * 90) + "deg)");
      });

    //   var timejg = 4000; //轮播间隔时间
    //   var time = setInterval(move, timejg);

    //   function move() {
    //       $("#j_silder_outer .img-item").css("transform", "rotateX(" + (--num * 90) + "deg)");
    //   }
    //   $('.slider-outer').hover(function () {
    //       clearInterval(time);
    //   }, function () {
    //       time = setInterval(move, timejg);
    //   });