$(function(){
    // видео
    let video = $('.video-block video')
    video.on('ended',function(){
        $(this).closest('.video-block').addClass('active')
    });

    $('.video-block-btn').on('click', function(){ 
        $(this).closest('.video-block').removeClass('active')
        let thisVideo = $(this).closest('.video-block').find('video')
        thisVideo.currentTime = 0;
        thisVideo.trigger('play');
         console.log('123')
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
})