$(document).on('click', '.showModal', function (event) {
    event.preventDefault();
    $('.modal_window').show();
});

$(document).on('click', '.modal_window .close', function () {
    $('.modal_window').hide();
});

$(function() {
    $('.btn_up').hide();

    $(window).scroll(function() {
        if($(window).scrollTop() > 800) {
            $('.btn_up').fadeIn();
        } else {
            $('.btn_up').fadeOut();
        }
    });
});