$(window).bind('scroll', function () {

    if ($(window).scrollTop() > document.documentElement.clientHeight) {
        $('.head-fixed').show("fast");
    } else {
        $('.head-fixed').hide("fast");
    }
});
