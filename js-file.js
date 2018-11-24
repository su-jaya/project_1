window.onload = function() {


  $("#default-text").hide();

  $("#fromatob").children().hide();
  $("#clubszene").children().hide();
  $("#funfacts").children().hide();
  $("#food").children().hide();
  $("#stereotypes").children().hide();

  //FORTUNE WHEEL

  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");

  var categories = [];
  categories.push({
    id: "berlinclubscene",
    x: 0,
    y: (Math.PI * 2) / 5,
    color: "#2CEBA3"
  });
  categories.push({
    id: "fromatob",
    x: (Math.PI * 2) / 5,
    y: (2 * (Math.PI * 2)) / 5,
    color: "#A32CEB"
  });
  categories.push({
    id: "eatingdrinking",
    x: (2 * (Math.PI * 2)) / 5,
    y: (3 * (Math.PI * 2)) / 5,
    color: "#2CD3EB"
  });
  categories.push({
    id: "kiezclichees",
    x: (3 * (Math.PI * 2)) / 5,
    y: (4 * (Math.PI * 2)) / 5,
    color: "#EB2CD3"
  });
  categories.push({
    id: "funfacts",
    x: (4 * (Math.PI * 2)) / 5,
    y: (5 * (Math.PI * 2)) / 5,
    color: "#2C74EB"
  });

  var wheel = {
    draw: function() {
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, category.x, category.y);
        ctx.fillStyle = category.color;
        ctx.fill();
      }
    }
  };

  wheel.draw();

  //Writes Category Text on Canvas

  var text = {
    draw: function() {
      ctx.save();
      ctx.translate(250, 250);
      ctx.rotate((36 * Math.PI) / 180);
      ctx.font = '28px "Dosis", serif';
      ctx.fillStyle = "white";
      ctx.fillText("Berlin Clubscene", 40, 10);

      ctx.rotate((72 * Math.PI) / 180);
      ctx.font = '28px "Dosis", serif';
      ctx.fillStyle = "white";
      ctx.fillText("From A to B", 40, 10);

      ctx.rotate((72 * Math.PI) / 180);
      ctx.font = '28px "Dosis", serif';
      ctx.fillStyle = "white";
      ctx.fillText("Eating & Drinking", 40, 10);

      ctx.rotate((72 * Math.PI) / 180);
      ctx.font = '28px "Dosis", serif';
      ctx.fillStyle = "white";
      ctx.fillText("District Clichées", 40, 10);

      ctx.rotate((72 * Math.PI) / 180);
      ctx.font = '28px "Dosis", serif';
      ctx.fillStyle = "white";
      ctx.fillText("Fun Facts", 40, 10);

      ctx.restore();
    }
  };
  text.draw();

  //Spins Wheel

  var x = 10;
  var random;
  var totalRotation = 0;

  function rotate() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);
    ctx.rotate(Math.PI / x);
    totalRotation += Math.PI / x;
    ctx.translate(-250, -250);
    wheel.draw();
    text.draw();
    if (x <= random) {
      window.requestAnimationFrame(rotate);
      x += 0.2;
    } else {
      selectCategory();
    }
  }

  //Selects the category

  var selectedCategory;

  function selectCategory() {
    var remainderRotation = totalRotation % (Math.PI * 2);
    var sector = Math.PI * 2 - remainderRotation - Math.PI / 2 
    
    categories.forEach(function(cat) {
    
    if (sector < 0) {
      sector = Math.PI * 2 + sector}
     } )
    
    categories.forEach(function(cat) {
      if(sector > cat.x && sector < cat.y) {

    selectedCategory = cat.id
    console.log(cat.id)
 
      }})
    
      printCategory();
    };
  
    // var countDownNumber = 5;
    var iterations = 5;

  function printCategory() {
    if (selectedCategory === "fromatob") {
      selectedCategory = $("#fromatob");
    }
    if (selectedCategory === "berlinclubscene") {
      selectedCategory = $("#clubszene");
    }
    if (selectedCategory === "eatingdrinking") {
      selectedCategory = $("#food");
    }
    if (selectedCategory === "funfacts") {
      selectedCategory = $("#funfacts");
    }
    if (selectedCategory === "kiezclichees") {
      selectedCategory = $("#stereotypes");
     
    } 

    selectedCategory
    .children()
    .eq(i)
    .show();

    
    // $("#counter").html(countDownNumber);
  
    // var countDown = setInterval(function() {

    //   if (iterations === 0){
    //     clearInterval(countDown) };
    
    //   if($("#counter").html() > 0) {
    //     $("#counter").html(parseFloat($("#counter").html())-1);

    //   } else if(parseFloat($("#counter").html()) === 0) {
    //     questionWrong(); 
    //     $("#counter").html(5);
    //   } 

     
    // },1500);

   
  
  }


  //Onclick SPIN button

  $("#spin").click(function() {
    totalRotation = 0;
    // var audio = new Audio("audiofile_fair.mp3");
    // audio.play();
    random = Math.floor(Math.random() * 70 + 50);
    rotate();
    $("#spin").prop("disabled", true);
  });


// quiz


  $(".answerSet input").on("click", function() {
    if ($(this).parent().hasClass("correct")) {
      questionRight();
    } else {
      questionWrong();
    }
  });


  var i = 0;
  
  function questionRight() {
    iterations--;
    $("#pointWrap").children().eq(i).addClass("greenpoint");
    selectedCategory.children().eq(i).hide();
    gameOver();
    // $("#counter").html(countDownNumber);
    i += 1;
    selectedCategory.children().eq(i).show();
  }
  
  function questionWrong() {
    iterations--;
    $("#pointWrap").children().eq(i).addClass("redpoint");
    selectedCategory.children().eq(i).hide();
    gameOver();
    // $("#counter").html(countDownNumber);
    i += 1;
    selectedCategory.children().eq(i).show();
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

    $("#spin").prop('disabled', false);
    $("#default-text").hide();
    x=10;
    ctx.resetTransform();
    wheel.draw();
    text.draw();
    i = 0;


    for(var o = 0; o < 5; o++) {
      $("#pointWrap").children().eq(o).removeClass("greenpoint");
      $("#pointWrap").children().eq(o).removeClass("redpoint");
    }
    



    } , 800)


  }


  
  
  }


  
};





  
   

  






  

  

