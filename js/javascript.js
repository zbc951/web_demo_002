    //登入切換

$(function(){
    $('.login').click(function(){
        $('.loginBox').removeClass('display');
        $('.insideBox').addClass('display');
    })
})

    //下拉式選單圖示顯示

$(function(){
    $('.sportLink').hover(function(){
        $('.slideMenu').addClass('display');
        $('.innerList.sport').addClass('display');
        $('.innerList.sport').siblings().removeClass('display');
    })

    $('.liveLink').hover(function(){
        $('.slideMenu').addClass('display');
        $('.innerList.live').addClass('display');
        $('.innerList.live').siblings().removeClass('display');
    })

    $('.slotLink').hover(function(){
        $('.slideMenu').addClass('display');
        $('.innerList.slot').addClass('display');
        $('.innerList.slot').siblings().removeClass('display');
    })

    $('.lotteryLink').hover(function(){
        $('.slideMenu').addClass('display');
        $('.innerList.lottery').addClass('display');
        $('.innerList.lottery').siblings().removeClass('display');
    })

    $('.fishLink').hover(function(){
        $('.slideMenu').addClass('display');
        $('.innerList.fish').addClass('display');
        $('.innerList.fish').siblings().removeClass('display');
    })

    $('.cardLink').hover(function(){
        $('.slideMenu').addClass('display');
        $('.innerList.card').addClass('display');
        $('.innerList.card').siblings().removeClass('display');
    })

    $('header .bottom li:nth-of-type(1),header .bottom li:nth-of-type(8),header .bottom li:nth-of-type(9)').hover(function(){
        $('.slideMenu').removeClass('display');
    })

    $('.slideMenu').mouseleave(function(){
        $('.slideMenu,.innerList').removeClass('display');
    })
})

    //圖片輪播上半部

$(document).on('ready', function () {
    $(".single-item").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
    })
})

    //圖片輪播主區域

$(document).on('ready', function () {
    $('.multiple-items').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
    });
})
$(function(){
    $('.sportGame').mouseenter(function(){
        $('.multiple-items .slick-dots li:nth-of-type(1)').click();
    })

    $('.liveGame').mouseenter(function(){
        $('.multiple-items .slick-dots li:nth-of-type(2)').click();
    })

    $('.slotGame').mouseenter(function(){
        $('.multiple-items .slick-dots li:nth-of-type(3)').click();
    })

    $('.lotteryGame').mouseenter(function(){
        $('.multiple-items .slick-dots li:nth-of-type(4)').click();
    })

    $('.fishGame').mouseenter(function(){
        $('.multiple-items .slick-dots li:nth-of-type(5)').click();
    })

    $('.cardGame').mouseenter(function(){
        $('.multiple-items .slick-dots li:nth-of-type(6)').click();
    })
})