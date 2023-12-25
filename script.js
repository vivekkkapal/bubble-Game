var hit = 0;
var totalscore = 0;

function makebubble() {
var clutter = "";

for (var i=1; i<=80; i++){
   var ran = Math.floor(Math.random() * 10)
   clutter += `<div class="bubble">${ran}</div>`;    
} 
document.querySelector("#panelbuttom").innerHTML = clutter;

}

var timer = 60
function RunTimer() {
   var timerEnter = setInterval(function(){
      if (timer > 0) {
         timer--;
         document.querySelector("#runtime").textContent = timer;
      }
      else{
         clearInterval(timerEnter);
         document.querySelector("#panelbuttom").innerHTML = `<h1>Game Over</h1> `
         document.querySelector("#hits").textContent = "0";
      }
   }, 1000)

}


function Hitvalue(){
      hit = Math.floor(Math.random()*10)
      document.querySelector("#hits").innerHTML = hit;

}

function Scorecheck(){
   totalscore += 10;
   document.querySelector("#score").innerHTML = totalscore;
}

 
function Play() {

   var hitran
   document.querySelector("#panelbuttom").addEventListener("click", function(details){
       hitran = Number(details.target.textContent);
       if (hitran === hit) {
         Scorecheck();
         makebubble();
         Hitvalue();
      }
   })

  

}

makebubble();
RunTimer();
Hitvalue();
Play();
