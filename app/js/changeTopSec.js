    $(function(){
      (function(){ 
        var colorMas = ["#142736","#163A56","#434A64", "#4B5685"];
        function changeColor(curNumber){

            curNumber++;
            if(curNumber > 4){
                curNumber = 1;
            }
            document.getElementById('top-sec').setAttribute('class', 'slideshow animate color' + curNumber);
            //document.getElementById('for-what').setAttribute('class', 'for-what animate textcolor' + curNumber);
            setTimeout(function(){changeColor(curNumber)}, 6000); 
            
        }
        changeColor(0);
      })();

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
    });