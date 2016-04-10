$(function() {
    $(".sug-click1").click(function() {
        if ($(".suggest-tog2").is(":visible")) {
            $(".suggest-tog2").toggle("fast");
        }
        $(".suggest-tog1").toggle("slow");
    });
    $(".sug-click2").click(function() {
        if ($(".suggest-tog1").is(":visible")) {
            $(".suggest-tog1").toggle("fast");
        };
        $(".suggest-tog2").toggle("slow");
    });
});
