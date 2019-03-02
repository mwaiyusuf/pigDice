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
   for(z=0;z<values.length;z++){
     if(values[z]!=1){
        nax=nax+values[z];
     }
     else {
       values.length=0;
     }

   }
   alert(nax)
 })

})


//calculate total score here


function roll2() {
 document.getElementById('pl2').innerHTML= parseInt(Math.random()*6+1);
}