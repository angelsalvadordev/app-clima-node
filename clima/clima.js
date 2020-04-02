const axios = require('axios')

const getClima = async (lat, lng) => {
  let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=664ea4f5321033be4343b00b1fa7adcf`)

  return resp.data.main.temp
}

module.exports = {
  getClima
}