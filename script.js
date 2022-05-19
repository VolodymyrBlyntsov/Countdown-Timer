const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownElement = document.getElementById('countdown');

/*
I could have originally given a class to the html element
and taken it through querySelector, but I'm practicing.
Therefore, I chose a different approach, to "take" the values through the id attribute
*/

function updateCountdown() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = (seconds < 10) ? "0" + seconds : seconds;

	countdownElement.innerHTML = `${minutes} : ${seconds}`;
	if (time != 0) {
		time--;
	}
}

setInterval(updateCountdown, 1000);