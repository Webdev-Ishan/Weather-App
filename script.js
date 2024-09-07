const apikey = "60d42902a9996ed1a2ab9178ad948f02";
const apiBaseurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function CheckWeather(city) {
  try {
    const response = await fetch(`${apiBaseurl}${city}&appid=${apikey}`);
    var data = await response.json();
    displayweather(data)
  } catch {
    console.log("Error")
  }
}

// ... rest of the code remains the same ...



function displayweather(data){

	const tablebody=document.getElementById('weather-data');

	const row= document.createElement("tr")

	row.innerHTML = `
    <td>${data.name}</td>
    <td>${data.main.temp}°C</td>
    <td>${data.main.feels_like}%</td>
	 <td>${data.main.temp_min}%</td>
	  <td>${data.main.temp_max}%</td>
	   <td>${data.main.pressure}%</td>
	    <td>${data.main.humidity}%</td>
    <td>${data.visibility}</td>
  `;

  tablebody.appendChild(row);
}

const cities = ["bangalore", "new york", "london","moscow","berlin","delhi","tokyo","dehradun"];


CheckWeather("bangalore")
CheckWeather("new york")
CheckWeather("london")
CheckWeather("moscow")
CheckWeather("berlin")
CheckWeather("delhi")
CheckWeather("tokyo")
CheckWeather("dehradun")

