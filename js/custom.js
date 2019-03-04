


//var totalValues[];
//var values=[];
//var summation=[];
//
//function roll() {
//
// values.push(document.getElementById('pl1').innerHTML= parseInt(Math.random()*6+1));
// alert(values)
//}
//
//$(document).ready(function(){
// $("#hold").click(function(){
//     alert("hi");
//   var nax=0;
//   for(i=0;i<values.length;i++){
//     if(values[i]!==1){
//        nax=nax+values[i];
//     }
//     else {
////       values.length=0;
//         values=0;
//     }
//
//   }
//   alert(nax);
// })
//
//})
//
//
////calculate total score here
//
//
//function roll2() {
// document.getElementById('pl2').innerHTML= parseInt(Math.random()*6+1);
//}

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
var totalSum2=[];
var sum2=[];
var currentScore2=0;

function roll1() {
    var rollDice1=parseInt(Math.floor((Math.random()*6+1)));
    document.getElementById('pl1').innerHTML=rollDice1;
    if(rollDice1!=1){
        currentScore1+=rollDice1;
        alert("the current score is" + currentScore1);
    }
    else{
     currentScore1=0;
     sum1=[];
     $(".bt1").hide();
      $(".bt2").show();
    }

};
$(document).ready(function(){
    $("#hold1").click(function(){
        sum1.push(currentScore1);
        alert(sum1);
        $(".bt1").hide();
         $(".bt2").show();
         sum1.forEach(function(sum) {
           totalSum1 += (sum);
         });

         alert(totalSum1);
         currentScore1=0;
          sum1=[];
         if (totalSum1>=100) {
           alert("you are the winner");
           $(".winner").hide();
           $(".congrats").show();
         }
    });

});

function roll2() {
    var rollDice2=document.getElementById('pl2').innerHTML=parseInt(Math.floor((Math.random()*6+1)));
    if(rollDice2!=1){
        currentScore2+=rollDice2;
        alert("the current score is" + currentScore2);

    }
    else{
     currentScore2=0;
        sum2=[];
        $(".bt2").hide();
         $(".bt1").show();
    }

};
$(document).ready(function(){
    $("#hold2").click(function(){
        sum2.push(currentScore2);
        alert(sum2);
        $(".bt2").hide();
         $(".bt1").show();
         sum2.forEach(function(sum) {
           return totalSum2 += sum;
         });

         alert(totalSum2);
         currentScore2=0;
          sum2=[];
         if (totalSum2>=100) {
           alert("you are the winner");
           $(".winner").hide();
           $(".congrats").show();
         }
    });

});
