const axios = require('axios');
const key = "2b4f7257ec001dc96c858168fc31e2e0";
const getClima = async(ubi) => {

    console.log(`Clima.. U: ${ubi.direccion}, lat:${ubi.lat}, lng:${ubi.lng}.`);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ubi.lat}&lon=${ubi.lng}&appid=${key}&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}