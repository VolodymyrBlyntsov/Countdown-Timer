const countdown = () => {

	const countDate = new Date('December, 4, 2022 00:00:00').getTime();
	const now = new Date().getTime();
	const gap = countDate - now;

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	let openingDay = Math.floor(gap / day);
	let openingHour = Math.floor((gap % day) / hour);
	let openingMinute = Math.floor((gap % hour) / minute);
	let openingSecond = Math.floor((gap % minute) / second);

	openingDay = (openingDay < 10) ? "0" + openingDay : openingDay;
	openingHour = (openingHour < 10) ? "0" + openingHour : openingHour;
	openingMinute = (openingMinute < 10) ? "0" + openingMinute : openingMinute;
	openingSecond = (openingSecond < 10) ? "0" + openingSecond : openingSecond;

	document.querySelector('.day').innerText = openingDay;
	document.querySelector('.hour').innerText = openingHour;
	document.querySelector('.minute').innerText = openingMinute;
	document.querySelector('.second').innerText = openingSecond;

};

setInterval(countdown, 1000);