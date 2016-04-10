$(window).bind('scroll', function () {
    if (screen.width > '480') {
        if ($(window).scrollTop() > document.documentElement.clientHeight) {
            $('.head-fixed').show("fast");
        } else {
            $('.head-fixed').hide("fast");
        }
    }
});
