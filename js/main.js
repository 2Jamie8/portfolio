$(function(){
    let menu = $('nav li');
    let bar = $('.bar');
    let menuWidth = menu.outerWidth();
    bar.css({
        'background-color' : '#ffffff',
        'width' : menuWidth,
        'height' : '5px'
    })
    menu.click(function(){
        let menuIndex = $(this).index();
        console.log(menuIndex)
        let contpage = $('.cont').eq(menuIndex);
        let contPageTop = contpage.offset().top;
        $('html, body').animate({
            scrollTop : contPageTop
        },400)
        let moveLeft = $(this).position().left;
        bar.animate({
            'left' : moveLeft
        })
        let thisWidth = $(this).outerWidth();
        bar.css ({
            'width' : thisWidth
        })
    })
    let hd = $('header');
    let headerTop = hd.offset().top;
    let cont01 = $('.cont01');
    let cont02 = $('.cont02');
    let cont03 = $('.cont03');
    let cont04 = $('.cont04');
    console.log(headerTop)
    $(window).scroll(function(){
        let scrollBar = $(window).scrollTop();
        console.log(cont01.outerHeight() / 2)
        console.log(scrollBar)
        if($('.main_visual').outerHeight() / 2 <= scrollBar){
            cont01.addClass('on');
        }else{cont01.removeClass('on');}
        if(cont01.offset().top + 500 <= scrollBar){
            cont02.addClass('on');
        }else{cont02.removeClass('on');}
        if(cont02.offset().top + 500 <= scrollBar){
            cont03.addClass('on');
        }else{cont03.removeClass('on');}
        if(cont03.offset().top <= scrollBar){
            cont04.addClass('on');
        }else{cont04.removeClass('on');}

        if($('.cont01').offset().top <= scrollBar){
            hd.addClass('on');
            menu.removeClass('on');
            menu.eq(0).addClass('on');
            bar.addClass('on');
            bar.css({
                left : menu.eq(0).position().left
            })
            bar.css ({
                'width' : menu.eq(0).outerWidth()
            })
        }else{
            hd.removeClass('on');
            menu.removeClass('on');
            bar.removeClass('on');
        }
        if($('.cont02').offset().top  <= scrollBar){
            menu.removeClass('on');
            menu.eq(1).addClass('on');
            bar.css({
                left : menu.eq(1).position().left
            })
            bar.css ({
                'width' : menu.eq(1).outerWidth()
            })
        }
        if($('.cont03').offset().top <= scrollBar){
            menu.removeClass('on');
            menu.eq(2).addClass('on');
            bar.css({
                left : menu.eq(2).position().left
            })
            bar.css ({
                'width' : menu.eq(2).outerWidth()
            })
        }
        if($('.cont04').offset().top <= scrollBar){
            menu.removeClass('on');
            menu.eq(3).addClass('on');
            bar.css({
                left : menu.eq(3).position().left
            })
            bar.css ({
                'width' : menu.eq(3).outerWidth()
            })
        }
    })
    let bodyBg = $('.click_bg');
    let cont04ImgFigure = $('.cont04figure');
    let cont04Img = $('.cont04img');
    let cont03Item = $('.cont03item')
    let cont04Item = $('.cont04item');
    cont03Item.click(function(){
        let thisImg = $(this).find('img').attr('src');
        cont04ImgFigure.show();
        bodyBg.addClass('on');
        cont04Img.attr('src', thisImg);
        hd.css({
            'display' : 'none'
        })
    })
    cont04Item.click(function(){
        let thisImg = $(this).find('img').attr('src');
        cont04ImgFigure.show();
        bodyBg.addClass('on');
        cont04Img.attr('src', thisImg);
        hd.css({
            'display' : 'none'
        })
    })
    $('.click_bg').click(function(){
        if($('.click_bg').css('display') == 'block'){
            $(this).removeClass('on')
            cont04ImgFigure.hide()
            cont05ImgFigure.hide()
        }
        hd.css({
            'display' : 'block'
        })
    })
    cont04ImgFigure.click(function(){
        $('.click_bg').removeClass('on')
        cont04ImgFigure.hide()
        hd.css({
            'display' : 'block'
        })
    })
    let cont05ImgFigure = $('.cont05figure');
    let cont05Img = $('.cont05img');
    let cont05Item = $('.cont05item')
    cont05Item.click(function(){
        let thisImg = $(this).find('img').attr('src');
        cont05ImgFigure.show();
        bodyBg.addClass('on');
        cont05Img.attr('src', thisImg);
        hd.css({
            'display' : 'none'
        })
    })
    cont05Item.click(function(){
        let thisImg = $(this).find('img').attr('src');
        cont05ImgFigure.show();
        bodyBg.addClass('on');
        cont05Img.attr('src', thisImg);
        hd.css({
            'display' : 'none'
        })
    })
    /* $('.click_bg').click(function(){
        if($('.click_bg').css('display') == 'block'){
            $(this).removeClass('on')
            cont05ImgFigure.hide()
        }
        hd.css({
            'display' : 'block'
        })
    }) */
    cont05ImgFigure.click(function(){
        $('.click_bg').removeClass('on')
        cont05ImgFigure.hide()
        hd.css({
            'display' : 'block'
        })
    })
})