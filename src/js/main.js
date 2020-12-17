$(function(){
    // видео
    let video = $('.video-block video')
    video.on('ended',function(){
        $(this).closest('.video-block').addClass('active')
    });

    // $('.video-block-btn').on('click', function(){ 
    //     $(this).closest('.video-block').removeClass('active')
    //     let thisVideo = $(this).closest('.video-block').find('video')
        
    // })
    $('.video-block').on('click', function(){
        $(this).toggleClass('active')
        let thisVideo = $(this).find('video')
        if($(this).hasClass('active')){
           
            thisVideo.trigger('pause');
        }
        else{
            thisVideo.currentTime = 0;
            thisVideo.trigger('play');
        }
    })

    // табы
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
    });

    $('.contact__tabs  ul.tabs__caption').on('click', 'li:not(.active)', function() {
        if($(window).width() < 1024){
            $('html, body').animate({
                scrollTop: $(this).closest('div.tabs').find('div.tabs__content').eq($(this).index()).offset().top // класс объекта к которому приезжаем
            }, 500); // Скорость прокрутки
           
        }
    });


    $('#modal-back').on('submit', function(){
        $.fancybox.close()
        $.fancybox.open({
            src: '#modal-back2', 
            modal: true
        });
        return false;
    })

    $('#modal-vopros').on('submit', function(){
        $.fancybox.close()
        $.fancybox.open({
            src: '#modal-back2', 
            modal: true
        });
        return false;
    })


    $('.big-slider').slick({
        arrows: false,
        asNavFor: '.nav-slider',
    })

    $('.nav-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.big-slider',
        focusOnSelect: true,
        variableWidth: true,
    })

    $('.big-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
       
        video.closest('.video-block').addClass('active')
        video.trigger('pause');
        
    });
})