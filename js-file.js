window.onload = function() {


  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");
  var radius = 250
  //Draws first Triangle
  ctx.beginPath();
  ctx.moveTo(250,250);
  ctx.arc(250,250,250,0,(Math.PI*2)/5);
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  
  
  //Draws second Triangle
  ctx.beginPath();
  ctx.moveTo(250,250);
  ctx.arc(250,250,250,(Math.PI*2)/5,2*(Math.PI*2)/5);
  ctx.fillStyle = "darkblue";
  ctx.fill();
  //Draws third Triangle
  ctx.beginPath();
  ctx.moveTo(250,250);
  ctx.arc(250,250,250,2*(Math.PI*2)/5,3*(Math.PI*2)/5);
  ctx.fillStyle = "orange";
  ctx.fill();
  //Draws fourth Triangle
  ctx.beginPath();
  ctx.moveTo(250,250);
  ctx.arc(250,250,250,3*(Math.PI*2)/5,4*(Math.PI*2)/5);
  ctx.fillStyle = "red";
  ctx.fill();

  //Draws fifth Triangle
  ctx.beginPath();
  ctx.moveTo(250,250);
  ctx.arc(250,250,250,4*(Math.PI*2)/5,5*(Math.PI*2)/5);
  ctx.fillStyle = "purple";
  ctx.fill();

  ctx.save();
  ctx.translate(250,250)
  ctx.rotate (36*Math.PI/180);
  ctx.font = '30px "Dosis", serif';
  ctx.fillStyle = "white";
  ctx.fillText("Berlin Clubscene", 50, 0);

  ctx.rotate (72*Math.PI/180);
  ctx.font = '30px "Dosis", serif';
  ctx.fillStyle = "white";
  ctx.fillText("From A to B", 50, 0);

  ctx.rotate (72*Math.PI/180);
  ctx.font = '30px "Dosis", serif';
  ctx.fillStyle = "white";
  ctx.fillText("Food & Drinks", 50, 0);

  ctx.rotate (72*Math.PI/180);
  ctx.font = '30px "Dosis", serif';
  ctx.fillStyle = "white";
  ctx.fillText("District Clichées", 50, 0);

  ctx.rotate (72*Math.PI/180);
  ctx.font = '30px "Dosis", serif';
  ctx.fillStyle = "white";
  ctx.fillText("Fun Facts", 50, 0);

  ctx.restore();
 
  
  





  
  $("#fromatob").children().hide();
  $("#clubszene").children().hide();
  $("#funfacts").children().hide();
  $("#food").children().hide();
  $("#stereotypes").children().hide();


  var countDownNumber = 5;
  $("#counter").html(countDownNumber);

  var countDown = setInterval(function() {

    var iterations = 5;
    
    if($("#counter").html() > 0) {
      $("#counter").html(parseFloat($("#counter").html())-1)
    } else if(parseFloat($("#counter").html()) === 0) {
      questionWrong(); 
      $("#counter").html(5);
      iterations--
    } else if (iterations === 0){
    clearInterval(countDown) }
  
  },2000)
  

  $(".answerSet input").on("click", function() {
    if ($(this).parent().hasClass("correct")) {
      questionRight();
    } else {
      questionWrong();
    }
  });


  var i = 0;

  function printClubszene() {
    $("#clubszene").children().eq(i).show();
  }
  
  function questionRight() {
    $("#pointWrap").children().eq(i).addClass("greenpoint");
    $("#clubszene").children().eq(i).hide();
    gameOver();
    $("#counter").html(countDownNumber);
    i += 1;
    $("#clubszene").children().eq(i).show();
  }
  
  function questionWrong() {
    $("#pointWrap").children().eq(i).addClass("redpoint");
    $("#clubszene").children().eq(i).hide();
    gameOver();
    $("#counter").html(countDownNumber);
    i += 1;
    $("#clubszene").children().eq(i).show();
  }

  function gameOver() {
  
    if(i === 4) {

      window.setTimeout(function() { 

      var counterRed = 0;
      var counterGreen = 0;
      var points = $(".points")

      for(var j = 0; j < points.length; j++ ) {
        if(points.eq(j).hasClass("redpoint")) {
        counterRed += 1
      } else if (points.eq(j).hasClass("greenpoint")) {
        counterGreen += 1
      } }

      if(counterRed === 0) {
        alert("Amazing! You answered everything correct")
      } else if (counterRed === 1) {
        alert("Good Job. Only one false!")
      } else if (counterRed === 2) {
        alert("Nice one. Two false")
      } else if (counterRed === 3) {
        alert("3 out of 5 wrong")
      } else if (counterRed === 4) {
        alert("only 1 right. You can do better!")
      } else if (counterRed === 5) {
        alert("all wrong! :( try again!")
      }

    } , 800)
  }
   
    
  }


  
};








  
   

  






  

  

