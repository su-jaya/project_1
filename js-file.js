window.onload = function() {
  var canvas = $("#canvasWheel")[0];
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);

  $("#fromatob").children().hide();
  $("#clubszene").children().hide();

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
    i += 1;
    $("#clubszene").children().eq(i).show();
  }
  
  function questionWrong() {
    $("#pointWrap").children().eq(i).addClass("redpoint");
    $("#clubszene").children().eq(i).hide();
    gameOver();
    i += 1;
    $("#clubszene").children().eq(i).show();
  }

  function gameOver() {
  
    if(i === 0) {
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
        alert("Amazing! you have all questions correct")
      } else if (counterRed === 1) {
        alert("Good Job. Only one false!")
      } else if (counterRed === 2) {
        alert("Nice one. Two false")
      } else if (counterRed === 3) {
        alert("you have 3 wrong")
      }

    }
   
    
  }
  
};


