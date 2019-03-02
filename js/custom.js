var total=0
var values=[];
 
function roll() {
   
 values.push(document.getElementById('pl1').innerHTML= parseInt(Math.random()*6+1));
 alert(values)
}

$(document).ready(function(){
 $("#hold").click(function(){
     alert("hi");
   var nax=0;
   for(i=0;i<values.length;i++){
     if(values[i]!==1){
        nax=nax+values[i];
     }
     else {
//       values.length=0;
         values=0;
     }

   }
   alert(nax);
 })

})


//calculate total score here


function roll2() {
 document.getElementById('pl2').innerHTML= parseInt(Math.random()*6+1);
}