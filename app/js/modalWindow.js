  	$(function() {
  	    $('#call').click(function(){  // добираемся до элемента по которому будем кликать
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