function sendCallBackData(){
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
      $('#overlay').fadeOut('fast');}
            
        but.setAttribute('style', '');
        but.innerHTML = "Отправить";
      }, 3000); // и теперь убираем оверлэй
      
}