<?php
//if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['message']) and !empty($_POST['email'])){
    
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    //setcookie('mail', 'sendmail');
    mail('Simakoff10@mail.ru', 'Заказ обратного звонка на сайте Get-Apps', 'Вам написал: '.$name. ' Его телефон: ' 
    	.$phone. ' Его почта: '.$email.' Его сообщение: '.$message, "Content-type:text/html;charset=utf-8");
    echo "Сообщение отправлено!";
//}