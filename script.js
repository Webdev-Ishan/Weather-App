const url = 'https://open-weather13.p.rapidapi.com/city/Dehradun/IN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9dfe568403msha805e14e378e183p18126djsn0fbc6e563ef1',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};


async function fetchdata() {
	

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
fetchdata();