$(function() {
    //Toggle fixed menu
    $(window).bind('scroll', function () {
        if (screen.width > '480') {
            if ($(window).scrollTop() > document.documentElement.clientHeight) {
                $('.head-fixed').show("fast");
            } else {
                $('.head-fixed').hide("fast");
            }
        }
    });

  //scrolling:
    $(function(){
        $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
            var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
            if ($(scroll_el).length == 0) {
                return
            }; // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
            
          return false; // выключаем стандартное действие
        });
    });

    //suggest toggle menu
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

    //change top section

    //Modal window
    $(function() {
        $('.call').click(function(){  // добираемся до элемента по которому будем кликать
            $('#overlay').fadeIn('fast',function(){ // после клика запускаем наш оверлэй
                $('#nonebox').animate({'top':'10px'},350); // а теперь аккуратно выводим наш блок
            });
        });
        $('#box-close').click(function(){ // кликаем по элементу который всё это будет закрывать, также здесь можно добавить сам оверлэй, чтобы по клику вне блока, всё сворачивалось.
            $('#nonebox').animate({'top':'-600px'},350,fadeOut);
            document.getElementById('name').value = "";
            document.getElementById('name').setAttribute('style', '');
            document.getElementById('phone').value = "";
            document.getElementById('phone').setAttribute('style', '');
            document.getElementById('email').value = "";
            document.getElementById('email').setAttribute('style', '');
            document.getElementById('message').value = "";
            document.getElementById('message').setAttribute('style', '');
            var but = document.getElementById('SendFormButton');
            but.setAttribute('style', '');
            but.innerHTML = "Отправить";
        });
    });

    function fadeOut() {
        $('#overlay').fadeOut('fast'); // и теперь убираем оверлэй
    }         
});




