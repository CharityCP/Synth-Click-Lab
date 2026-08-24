let button1= document.getElementById("synth-1");
let correctAnswer1= "The Unity Nexus";

button1.addEventListener("click", function(){
	let synth1= document.getElementById("synthInputBox").value;


if (synth1=== correctAnswer1) {
	console.log("correctAnswer");
	results.innerHTML='<img src="award1.jpg" alt="reward emblem" width="100">You got the answer correct!<p> Reward UNLOCKED!!</p>'
	results.className= "reward";
	
}else{ 
console.log("not correctAnswer");
results.innerHTML='<h2> OOPS Try Again!</h2><p> Correct answer is: The Unity Nexus</p><p>Keep Practicing and play again!</p>'
results.className= "OOPS";
}
});
	

let button2= document.getElementById("kim-1");
let correctAnswer2= "Betrayed by his father";

button2.addEventListener("click", function () {
	let kim1= document.getElementById("kimInputBox").value;
	
	
if (kim1=== correctAnswer2) {
console.log("correctAnswer");
	results.innerHTML='<img src="award1.jpg" alt="reward emblem" width="100">You got the answer correct!<p> Reward UNLOCKED!!</p>'
	results.className= "reward";
	
}else{ 
console.log("not correctAnswer");
results.innerHTML='<h2> OOPS Try Again!</h2><p> Correct answer is: Betrayed by his father</p><p>Keep Practicing and play again!</p>'
results.className= "OOPS";
}
});
	

let button3= document.getElementById("aridyn-1");
let correctAnswer3= "Self Preservation";

button3.addEventListener("click", function () {
	let aridyn1= document.getElementById("aridynInputBox").value;

if (aridyn1=== correctAnswer3) {
console.log("correctAnswer");
	results.innerHTML='<img src="award1.jpg" alt="reward emblem" width="100">You got the answer correct!<p> Reward UNLOCKED!!</p>'
	results.className= "reward";
	
}else{ 
console.log("not correctAnswer");
results.innerHTML='<h2> OOPS Try Again!</h2><p> Correct answer is: Self Preservation</p><p>Keep Practicing and play again!</p>'
results.className= "OOPS";
}
});	


let button4= document.getElementById("kryos-1");
let correctAnswer4= "Humanity and their ways";

button4.addEventListener("click", function (){
	let kryos1= document.getElementById("kryosInputBox").value;
	
if (kryos1 === correctAnswer4) {
console.log("correctAnswer");
	results.innerHTML='<img src="award1.jpg" alt="reward emblem" width="100">You got the answer correct!<p> Reward UNLOCKED!!</p>'
	results.className= "reward";
	
}else{ 
console.log("not correctAnswer");
results.innerHTML='<h2> OOPS Try Again!</h2><p> Correct answer is: Humanity and their ways</p><p>Keep Practicing and play again!</p>'
results.className= "OOPS";
}
});		
	