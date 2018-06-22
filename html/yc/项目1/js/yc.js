$(function(){
    $(window).scroll(function(){
        if($(document).scrollTop() > 0){
            $('.side_btn').css('display','block')
        } else {
            $('.side_btn').css('display','none')
        }
       
    })
    $('.to_up').click(function(){
        console.log(1)
        $('html,body').animate({scrollTop: 0}, 500) 
    })
    //查看全部展开
    var flag = true;
    $('.all_btn').click(function(){
        if(flag){
            $('.choose_label').animate({'height':'900px','overflow':'visible'},400);
            $(this).animate({'top':'900px'},400);
            $('html,body').animate({scrollTop: '500px'}, 400) ;
            $(this).text('收起')
        } else {
            $('.choose_label').animate({'height':'224px','overflow':'hidden'},400);
            $(this).animate({'top':'225px'},400);
            $('html,body').animate({scrollTop: 0}, 400) ;
            $(this).text('查看全部')
        }
        flag = !flag
    })






    


    $('.content_price').each(function(index,el){

      console.log(el);
      var flag1 = true;
      $(el ).find('h3').click(function(){

        
        if(flag1){            
            $(this).siblings('div').animate({'height':'180px'},400).css('display','block') ;  
            $(this).find('div').text('-').css('fontSize','34px')
         } else {
             
            $(this).siblings('div').animate({'height':0},400).hide(400)
            $(this).find('div').text('+').css('fontSize','26px')
         }
         flag1 = !flag1
      })



    })

    // $('.content_price> h3').click( function () {
    //     // var index = $(this).index
    //     if(flag1){            
    //        $(this).siblings('div').animate({'height':'200px'},500).css('display','block') ;  
           
    //     } else {
    //         $(this).siblings('div').css('display','none')
    //        $(this).siblings('div').animate({'height':0})
           
    //     }
    //     flag1 = !flag1
        
    // })
    
    //  $('#naturea').click( function () {
    //     if(flag){
    //        $('#descriptiona').animate({'height':'200px','display':'block'},500)   
    //     } else {
    //        $('#descriptiona').css('display','none')
    //     }
    //     flag = !flag
    // })

    // $('#natureb').click( function () {
    //     if(flag){
    //        $('#descriptionb').css('display','block')  
    //     } else {
    //        $('#descriptionb').css('display','none')
    //     }
    //     flag = !flag
    // })

    // $('#naturec').click( function () {
    //     if(flag){
    //        $('#descriptionc').css('display','block')  
    //     } else {
    //        $('#descriptionc').css('display','none')
    //     }
    //     flag = !flag
    // })

    // $('#natured').click( function () {
    //     if(flag){
    //        $('#descriptiond').css('display','block')  
    //     } else {
    //        $('#descriptiond').css('display','none')
    //     }
    //     flag = !flag
    // })

    // $('#naturee').click( function () {
    //     if(flag){
    //        $('#descriptione').css('display','block')  
    //     } else {
    //        $('#descriptione').css('display','none')
    //     }
    //     flag = !flag
    // })

    
    $('#rankBtn>li').click(function(){
        var index = $(this).index();

         $(this).css('backgroundColor','skyblue').siblings('li').css('backgroundColor','')
        $('.option_phone>div:eq('+index+')').css('display','block').siblings('div').css('display','none')
        // $('.option_phone>div:eq('+index+')').css('').siblings().css()
    })

    //获得焦点
    $('.searches ').focus(function () {
        $(this).attr( 'placeholder',' ')
    })
     $('.searches').blur(function() {
         $(this).attr('placeholder','搜索手机或专题')
     })
})
