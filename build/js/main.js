$(function(){
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
})