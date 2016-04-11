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

  //Плавный скроллинг страницы:
    $(function(){
        $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
          var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
            if ($(scroll_el).length == 0) return; // проверим существование элемента чтобы избежать ошибки
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
    $(function(){
        var colorMas = ["#142736","#163A56","#434A64", "#4B5685"];
        function changeColor(curNumber){

            curNumber++;
            if(curNumber > 4){
                curNumber = 1;
            }
            document.getElementById('top-sec').setAttribute('class', 'animate color' + curNumber);
            //document.getElementById('for-what').setAttribute('class', 'for-what animate textcolor' + curNumber);
            setTimeout(function(){changeColor(curNumber)}, 6000); 
            
        }
        changeColor(0);
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
});

//      (function(){     
 //       var words = ['проектируем', 'разрабатываем', 'поддерживаем'],
  //          l = words.length,
   //         i = 0,
    ///        w = $('#word').text(words[i++]);
//
  //      setInterval(function(){ 
    //      w.text(words[i++]);
//          if (i >= l) i = 0;
  //        document.getElementById('top_img').setAttribute('src', 'img/All_for_audi' + i + '.png');
   //     },6000);
    //  })();
    



