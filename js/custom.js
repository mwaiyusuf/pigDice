// if(nameInput1=="" || nameInput2==""){
//    $("#start").Toggle(10ms,1)
// }
$("#start").click(function(){

  $(".pdice").hide();
  $(".game").show();

  var nameInput1 =$("input#name1").val();
  var nameInput2 =$("input#name2").val();

  $("#plyr1").text(nameInput1);
  $("#plyr2").text(nameInput2);

})
var totalSum1=0;
var sum1=[];
var currentScore1=0;
var totalSum2=0;
var sum2=[];
var currentScore2=0;
  $("#bos").css({opacity: "0.2"});

function roll1() {
    var rollDice1=parseInt(Math.floor((Math.random()*6+1)));
    document.getElementById('pl1').innerHTML=rollDice1;
    if(rollDice1==1){
        document.getElementById('img').src="img/face1.png";
    }
    else if(rollDice1==2){
        document.getElementById('img').src="img/face2.png";
    }
    else if(rollDice1==3){
        document.getElementById('img').src="img/face3.png";
    }
    else if(rollDice1==4){
        document.getElementById('img').src="img/face4.png";
    }
    else if(rollDice1==5){
        document.getElementById('img').src="img/face5.png";
    }
    else{
        document.getElementById('img').src="img/face 6.png";
    }
    if(rollDice1!=1){
        currentScore1+=rollDice1;
        // alert("the current score is" + currentScore1);
          document.getElementById('currentScore1').innerHTML=currentScore1;
    }
    else{
     currentScore1=0;
     sum1=[];
     $(".bt1").hide();
      $(".bt2").show();
        $("#bod").css({opacity: "0.2"});
        $("#bos").css({opacity: "1"});
    }

};
$("#restart").click(function(){
  var totalSum1=0;
  var sum1=[];
  var currentScore1=0;
  var totalSum2=0;
  var sum2=[];
  var currentScore2=0;
    $("#bos").css({opacity: "0.2"});


})
$(document).ready(function(){
    $("#hold1").click(function(){
        sum1.push(currentScore1);
        // alert(sum1);
          // document.getElementById('sum1').innerHTML=sum1;
        $(".bt1").hide();
         $(".bt2").show();
        $("#bod").css({opacity: "0.2"});
          $("#bos").css({opacity: "1"});
         sum1.forEach(function(sum) {
           totalSum1 += (sum);
         });

         // alert(totalSum1);
           document.getElementById('totalSum1').innerHTML=totalSum1;
         currentScore1=0;
          sum1=[];
         if (totalSum1>=100) {
           alert("you are the winner");

           $(".winner").hide();

           $(".congrats").show();
            $("#winn").text(nameInput1);
              // document.getElementById('winn').innerHTML=nameInput1;

         }
    });

});

function roll2() {
    var rollDice2=document.getElementById('pl2').innerHTML=parseInt(Math.floor((Math.random()*6+1)));
    if(rollDice2==1){
        document.getElementById('img').src="img/face1.png";
    }
    else if(rollDice2==2){
        document.getElementById('img').src="img/face2.png";
    }
    else if(rollDice2==3){
        document.getElementById('img').src="img/face3.png";
    }
    else if(rollDice2==4){
        document.getElementById('img').src="img/face4.png";
    }
    else if(rollDice2==5){
        document.getElementById('img').src="img/face5.png";
    }
    else{
        document.getElementById('img').src="img/face 6.png";
    }
    if(rollDice2!=1){
        currentScore2+=rollDice2;
        // alert("the current score is" + currentScore2);
          document.getElementById('currentScore2').innerHTML=currentScore2;

    }
    else{
     currentScore2=0;
        sum2=[];
        $(".bt2").hide();
         $(".bt1").show();
           $("#bos").css({opacity: "0.2"});
            $("#bod").css({opacity: "1"});
    }

};
$(document).ready(function(){
    $("#hold2").click(function(){
        sum2.push(currentScore2);
        // alert(sum2);
          // document.getElementById('sum2').innerHTML=sum2;
        $(".bt2").hide();
         $(".bt1").show();
           $("#bos").css({opacity: "0.2"});
           $("#bod").css({opacity: "1"});
         sum2.forEach(function(sums) {
           return totalSum2 += sums;
         });

         // alert(totalSum2);
           document.getElementById('totalSum2').innerHTML=totalSum2;
         currentScore2=0;
          sum2=[];
         if (totalSum2>=100) {
           alert("you are the winner");
              // document.getElementById('winn').append(nameInput2);

              //  alert("hi")
           $(".winner").hide();
          $("#wins").text(nameInput2);
           $(".congrats").show();
            // document.getElementById('wins').innerHTML=nameInput2;
         }
    });

});
