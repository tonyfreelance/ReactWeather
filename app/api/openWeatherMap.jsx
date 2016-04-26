var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=eda600892dfc8050f1f9a714467642b2';

module.exports = {
	getTemp: function (city) {
		var encodedLocation = encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl)
		.then(function (result) {
			if(result.data.cod && result.data.message) {
				throw new Error(result.data.message);
			} else {
				return result.data.main.temp;
			}
		}, function (err) {
			throw new Error(err.data.message);
		});
	}
}