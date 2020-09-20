//********************HEADER********************
//fade effect on header bar
$(window).scroll(function() {
    if($(this).scrollTop() > 10) {
        $('.image-box').addClass('opaque');
        $('.info-box').addClass('opaque');
        $('.image-box').removeClass('viewable');
        $('.info-box').removeClass('viewable');
    } else {
        $('.image-box').addClass('viewable');
        $('.info-box').addClass('viewable');
        $('.image-box').removeClass('opaque');
        $('.info-box').removeClass('opaque');
    }
});
//*************************************************
