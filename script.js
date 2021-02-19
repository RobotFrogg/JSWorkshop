//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;
switch (dayOfWeekNumber) {
	case 0:
		nameOfDay = 'Sunday';
		break;
	case 1:
		nameOfDay = 'Monday';
		break;
	case 2:
		nameOfDay = 'Tuesday';
		break;
	case 3:
		nameOfDay = 'Wednesday';
		break;
	case 4:
		nameOfDay = 'Thursday';
		break;
	case 5:
		nameOfDay = 'Friday';
		break;
	case 6:
		nameOfDay = 'Saturday';
		break;
}
//Display day
let weekdayDiv = document.getElementById('wd-returned-value');
weekdayDiv.innerHTML = `${nameOfDay}`;
//Display quote and quote name
let quoteDiv = document.getElementById('rq-returned-value');
let authorDiv = document.getElementById('qa-returned-value');
// Grab random quote from API
function randomQuote() {
	$.ajax({
		url: "https://api.forismatic.com/api/1.0/",
		jsonp: "jsonp",
		dataType: "jsonp",
		data: {
			method: "getQuote",
			lang: "en",
			format: "jsonp"
		},
		success: function(quote) {
			$('#rq-returned-value').html('"' + quote.quoteText + '"')
			$('#qa-returned-value').html("- " + quote.quoteAuthor)
		}
	});
}
randomQuote();