const apikey="60d42902a9996ed1a2ab9178ad948f02";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function CheckWeather() {
	const response= await fetch(apiurl+`&appid=&{apikey}`);
	var data=await response.json();
	console.log(data)
}

CheckWeather()