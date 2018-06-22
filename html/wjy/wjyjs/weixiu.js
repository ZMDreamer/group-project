$(function () {
    
    $('.c-middle ul li').click(function(){
        $(this).addClass('cls').siblings('li').removeClass('cls')
        var index = $(this).index()
        console.log(index)
        console.log( $('.c-middle ul li'))
        $('#c-hide>div:eq('+index+')').show().siblings().hide()
        return false;
    })
    $('.box1>div').click(function () {
        $(this).css('color','#0FAE6F').siblings().css('color','gray')
        $('#confirm').css('backgroundColor','#0FAE6F')
    })
    $('.box3>div').click(function () {
        $(this).css('color','#0FAE6F').siblings().css('color','gray')
        $('#confirm2').css('backgroundColor','#0FAE6F')
    })

    $('.guide .right').each(function(index, ele){
        $(ele).click(function () {
        $(this).siblings('ul').slideDown(300)
        $(this).parent().siblings('li').children('ul').slideUp(300)
        })
    })
    var s = true;
    setInterval(function () {
        if (s) {
            $('.rexian a').css('color','blue')
            $('.rexian img').hide()
            s = false
        } else {
            $('.rexian a').css('color','red')
            $('.rexian img').show()
            s = true
        }
    },500)
   
    $('.rexian a').click(function () {
        $('.mask').show()
        $('.s-window').show()
    })
    $('.s-window span').click(function(){
        $('.mask').hide()
        $('.s-window').hide()
    })

    $('#ma1').hover(function(){
        $('#dama1').show()},
            function(){
                $('#dama1').hide()
        
    })
    $('#ma2').hover(
        function(){
        $('#dama2').show()},
        function(){
        $('#dama2').hide() 
    })
    

})