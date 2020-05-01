let dt = new Date(new Date().setTime(0));
let gtime = dt.getTime();
let seconds = Math.floor((gtime % (1000 * 60))/ 1000);
let minutes = Math.floor((gtime % (1000 * 60 * 60))/( 1000 * 60));
let time = 0;
let t;
let userTime = setInterval(function(){
	time++;	
	if(seconds < 59) {
		seconds++;
	} else {
		seconds = 0;
		minutes++;
	}
	let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
	let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`;
	// display timer on quiz page
	document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`;
	// Display time on result page
	t = `${formatted_min} minutes, ${formatted_sec} seconds`;
}, 1000);