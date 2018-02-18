$(function(){
    $($('.gallery__image-item')[0]).addClass("gallery__image-item--active");

    $("#next").on('click' , function(){
        var currentElement = $('.gallery__image-item--active');
        var nextElement = $('.gallery__image-item--active').next();

        if(!nextElement.length){
            nextElement = $($('.gallery__image-item')[0]);
        }

        currentElement.removeClass("gallery__image-item--active");
        nextElement.addClass("gallery__image-item--active");
    })


    $("#back").on('click' , function(){
        var currentElement = $('.gallery__image-item--active');
        var nextElement = $('.gallery__image-item--active').prev();

        if(!nextElement.length){
            nextElement = $($('.gallery__image-item')[$('.gallery__image-item').length-1]);
        }

        currentElement.removeClass("gallery__image-item--active");
        nextElement.addClass("gallery__image-item--active");
    })
})
