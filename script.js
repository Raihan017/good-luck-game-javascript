
  //  var myVar1 = $("#betbtn").find('.bet1').val();
  //  var myVar2 = $("#betbtn").find('.bet2').val();
  //  var myVar3 = $("#betbtn").find('.bet3').val();
  //  var myVar4 = $("#betbtn").find('.bet4').val();


   $("<span>$$$    </span>").prependTo("h1");
   $("<span>     $$$</span>").appendTo("h1");


  function myFunction1() {
    var coin = prompt("Bet Your Gold Coin :");
    if (coin != null) {
      document.getElementById("coinvalue").innerHTML =
      "You Invested " + coin + " $ At BOX 1";
       var bccoin=coin.toString();
  $("#box1").text(bccoin + '$');
    }
  $(".round").click(function(){
    var x = Math.random()*10000;
    var ang = Math.floor(x);
    var angle = ang % 360;
    
    $(".arrow").css({"transform":'rotate('+x+'deg)', "transition-property": "all","transition-duration": "5s","transition-timing-function":"ease-out"});


    if( angle == 0 || angle == 90 || angle == 180 || angle == 270)
   {   
    $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
      document.getElementById("msgbox").innerHTML="OOps! Draw. Try Again";
   }


    else if ( angle > 0 && angle < 90 )
       {        
        //      document.getElementById("msgbox").innerHTML="Congratz!!! You Won $" +bccoin;
           // $("#msgbox").delay(5000).html("Congratz!!! You Won $" +bccoin);
           $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});

            $("#msgbox").text("Congratz!!! You Won $" +bccoin);
       }
     
       else
       {
        //  document.getElementById("msgbox").innerHTML="Sorry! You Lost $" +bccoin;
        $("#msgbox").css({"transform": 'rotateY(180000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
        // $("#msgbox").text("Sorry! You lost $" +bccoin);
        $("#msgbox").text("Sorry! You Lost $" +bccoin);

       }
 

  });
  }

  function myFunction2() {
    var coin = prompt("Bet Your Gold Coin :");
    if (coin != null) {
      document.getElementById("coinvalue").innerHTML =
      "You Invested " + coin + " $ At BOX 2";
      console.log(coin);
       var bccoin=coin.toString()
  $("#box2").text(bccoin + "$");
  }
  $(".round").click(function(){
    var x = Math.random()*10000;
    var ang = Math.floor(x);
    var angle = ang % 360;
    
    $(".arrow").css({"transform":'rotate('+x+'deg)', "transition-property": "all","transition-duration": "5s","transition-timing-function":"ease-out"} );


    if( angle == 0 || angle == 90 || angle == 180 || angle == 270)
   {
    $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
      document.getElementById("msgbox").innerHTML="OOps! Draw. Try Again";
   }


    else if ( angle > 90 && angle < 180 )
       {    
        $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
             document.getElementById("msgbox").innerHTML="Congratz!!! You Won $" +bccoin;
            
       }
     
       else
       { 
        $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
         document.getElementById("msgbox").innerHTML="Sorry! You Lost $" +bccoin;
       }

  });
  }



  function myFunction3() {
    var coin = prompt("Bet Your Gold Coin :");
    if (coin != null) {
      document.getElementById("coinvalue").innerHTML =
      "You Invested " + coin + " $ At BOX 3";
      console.log(coin);
       var bccoin=coin.toString()    
  $("#box3").text(bccoin + "$");
  }
  $(".round").click(function(){
    var x = Math.random()*10000;
    var ang = Math.floor(x);
    var angle = ang % 360;
    
    $(".arrow").css({"transform":'rotate('+x+'deg)', "transition-property": "all","transition-duration": "5s","transition-timing-function":"ease-out"});


    if( angle == 0 || angle == 90 || angle == 180 || angle == 270)
   {  
    $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
      document.getElementById("msgbox").innerHTML="OOps! Draw. Try Again";
   }

    else if ( angle > 180 && angle < 270 )
       {    
        $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
             document.getElementById("msgbox").innerHTML="Congratz!!! You Won $" +bccoin;
            
       }
     
       else
       {
        $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
         document.getElementById("msgbox").innerHTML="Sorry! You Lost $" +bccoin;
       }
 
  });
  }


  function myFunction4() {
    var coin = prompt("Bet Your Gold Coin :");
    if (coin != null) {
      document.getElementById("coinvalue").innerHTML =
      "You Invested " + coin + " $ At BOX 4";
      console.log(coin);
       var bccoin=coin.toString()
      $("#box4").text(bccoin + "$");
  }
  $(".round").click(function(){
    var x = Math.random()*10000;
    var ang = Math.floor(x);
    var angle = ang % 360;
    
    $(".arrow").css({"transform":'rotate('+x+'deg)', "transition-property": "all","transition-duration": "5s","transition-timing-function":"ease-out"});


    if( angle == 0 || angle == 90 || angle == 180 || angle == 270)
   {
    $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
      document.getElementById("msgbox").innerHTML="OOps! Draw. Try Again";
   }


    else if ( angle > 270 && angle < 360 )
       {    
        $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
             document.getElementById("msgbox").innerHTML="Congratz!!! You Won $" +bccoin;
            
       }
     
       else
       {
        $("#msgbox").css({"transform": 'rotateY(18000deg)',"transition-property": "all","transition-duration": "5.2s","transition-timing-function":"ease-out"});
         document.getElementById("msgbox").innerHTML="Sorry! You Lost $" +bccoin;
       }
 

  });
  }



   $(".reset").click(function(){
    location.reload(true);
});



