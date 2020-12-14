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
})