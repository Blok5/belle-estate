$(function() {   
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

    window.sendCallBackData = function () {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        var params = 'name=' + name + '&phone=' + phone + '&email=' + email + '&message=' + message;
            
        if ( name ) { document.getElementById('name').setAttribute('style', 'border: 1px solid green;box-shadow: 2px 2px 3px green;');
        } else { document.getElementById('name').setAttribute('style', 'border: 1px solid red;');} 
        if ( phone ) { document.getElementById('phone').setAttribute('style', 'border: 1px solid green;box-shadow: 2px 2px 3px green;');
        } else { document.getElementById('phone').setAttribute('style', 'border: 1px solid red;');}
        if ( message ) { document.getElementById('message').setAttribute('style', 'border: 1px solid green;box-shadow: 2px 2px 3px green;');
        } else { document.getElementById('message').setAttribute('style', 'border: 1px solid red;');} 

        if (!okGo.checkValidity()){ 

            var but = document.getElementById('SendFormButton');
            but.setAttribute('style', 'color: red;border: 1px solid red;');
            but.innerHTML = "Заполните форму корректно!";
            return;
        }
     
        var xhr = new XMLHttpRequest();

        console.log("Sending...");

        xhr.open('POST', './js/heandler.php');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }           
        };
        xhr.onerror = function() {
            alert('Извините, данные не были переданы');
        }
        xhr.send(params);

        var but = document.getElementById('SendFormButton');
        but.setAttribute('style', 'color: green;box-shadow: 2px 2px 3px green;border: 1px solid green;');
        but.innerHTML = 'Отправлено!';

          
        setTimeout (function() {
            $('#nonebox').animate({'top':'-600px'},350,fadeOut);
            document.getElementById('name').value = "";
            document.getElementById('name').setAttribute('style', '');
            document.getElementById('phone').value = "";
            document.getElementById('phone').setAttribute('style', '');
            document.getElementById('email').value = "";
            document.getElementById('email').setAttribute('style', '');
            document.getElementById('message').value = "";
            document.getElementById('message').setAttribute('style', '');

            function fadeOut() {
                $('#overlay').fadeOut('fast');
            }
                
            but.setAttribute('style', '');
            but.innerHTML = "Отправить";
        }, 3000); // и теперь убираем оверлэй
          
    }     
});