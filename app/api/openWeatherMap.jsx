var axios = require('axios');
// 906ae82906a2e9b54667f2e7ceeaecff
// http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=906ae82906a2e9b54667f2e7ceeaecff&q=reno

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=906ae82906a2e9b54667f2e7ceeaecff';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    console.log(encodedLocation)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(requestUrl)

    return axios.get(requestUrl).then(function (response) {
      console.log('sucess')
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message)
      } else {
        return response.data.main.temp;
      }
    }, function (response) {
      console.log('fail')
      throw new Error('There was an issue with your request.');
    });
  }
}
