let headline = document.getElementById("headline-1");
	
	
let synth1= document.getElementById("synth-1").value;
let correctAnswer1= "The Unity Nexus";

if (synth1=== correctAnswer) {
	results.innerHTML=
	'<img src="award.jpg" alt="reward emblem"
	width="80">You got the answer correct!'
	<p> Reward UNLOCKED!!</p>
	results.className= "reward";
	
}else{ 
results.innerHTML=
<h2> OOPS Try Again!</h2>
<p>Keep Practicing and try again!</p>
results.className= "OOPS";

button1.addEventListener("click", function(){
	

// Display Results
const results= document.getElementById(results);
	

