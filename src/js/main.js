$(function(){
    // поиск
    $('.search').on('click', function(){
        $(this).addClass('active')
    })

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".search"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('active')
		}
    });
    
    $('.search.active img').on('click', function(){
        // поиск когда кликаешь на картинку поиска
    })
})