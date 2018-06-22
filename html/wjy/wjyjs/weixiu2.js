$(function(){
    $('.serviceImg ol li').hover(function() {
        $(this).css('backgroundColor','red').siblings('li').css('backgroundColor','black')
        var index = $(this).index()
        console.log(index)
        $('.serviceImg ul li:eq('+index+')').removeClass('hide')
        $('.serviceImg ul li:eq('+index+')').siblings('li').addClass('hide')
    })
    $('.cs_nav>ul>li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var index = $(this).index()
        $('.cs_nav>ul>li:eq('+index+')>div:eq(1)').show()
        $('.cs_nav>ul>li:eq('+index+')>div:eq(0)').hide()
        $(this).siblings("li").each(function(){
            $(this).children("div:eq(0)").show();
            $(this).children("div:eq(1)").hide();
        })
        $('.cs_nav>div:eq('+index+')').siblings('div').addClass('current')
        $('.cs_nav>div:eq('+index+')').removeClass('current')
    })
    $('.newGuide>ul>li').click(function(){
        $('.newGuide>ul a').addClass('active')
        $(this).siblings('li').find('a').removeClass('active')
        var index = $(this).index()
        $('.newGuide>ol>li:eq('+index+')').removeClass('current').siblings('li').addClass('current')

    })
    $('.help>ul>li').click(function(){
        $('.help>ul a').addClass('active')
        $(this).siblings('li').find('a').removeClass('active')
        var index = $(this).index()
        $('.help>ol>li:eq('+index+')').removeClass('current').siblings('li').addClass('current')
    })
    $('.rexian a').click(function () {
        $('.mask').show()
        $('.s-window').show()
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