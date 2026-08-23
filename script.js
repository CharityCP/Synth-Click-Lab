let headline = document.getElementById("headline-1");
	
	
let button1= document.getElementById("synth-1");
let correctAnswer1= "The Unity Nexus";

button1.addEventListener("click", function(){
	let synth1= document.getElementById("synthInputBox").value;


if (synth1=== correctAnswer1) {
	console.log("correctAnswer");
	results.innerHTML='<img src="award1.jpg" alt="reward emblem" width="80">You got the answer correct!<p> Reward UNLOCKED!!</p>'
	results.className= "reward";
	
}else{ 
console.log("not correctAnswer");
results.innerHTML='<h2> OOPS Try Again!</h2><p>Keep Practicing and play again!</p>'
results.className= "OOPS";
}
});
	

// Display Results
//const results= document.getElementById(results);
	

