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
var totalSum=[];
var sum=[];
var currentScore=0;
function roll() {
    var rollDice=document.getElementById('pl1').innerHTML=parseInt(Math.random()*6+1);
    var diceRoll=document.getElementById('pl2').innerHTML=parseInt(Math.random()*6+1);
    if(rollDice!=1){
        currentScore+=rollDice;
        alert("the current score is" + currentScore);
        
    }
    else{
     currentScore=0;
    }
     if(diceRoll!=1){
        currentScore+=diceRoll;
        alert("the current score is" + currentScore);
        
    }
    else{
     currentScore=0;
    }
    
};
$(document).ready(function(){
    $("#hold").click(function(){
        sum.push(currentScore);
        alert(sum);
        $("#bod").hide();
         $("#bos").show();
    });
    
});
 
