$('.menu-click').click(function() {
    $('.menu').toggle( "fast" );
    if ($('.menu').data('clicked') === true){
        $('.menu').data('clicked', false);
        $(this).css({
            "transform": "rotate(0deg)",
            "-moz-transform": "rotate(0deg)",
            "-webkit-transform": "rotate(0deg)",
            "-o-transform": "rotate(0deg)"
        });
        } else {
            $('.menu').data('clicked', true);
            $(this).css({
                "transform": "rotate(90deg)",
                "-moz-transform": "rotate(90deg)",
                "-webkit-transform": "rotate(90deg)",
                "-o-transform": "rotate(90deg)"
            });
        }
});
if (screen.width < '480') {
    $(".header-item").after("<hr/>");
}