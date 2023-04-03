import axios from 'axios'

const API_KEY = '15e1b0a4fdd359e44dd0b17a27d3f1ce'
const API_URL = 'http://api.openweathermap.org/data/2.5/weather'


export const getWeather = async(city, country) =>{
    try {
        let res = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}`);
        return res.data;
    } catch (error) {
        console.log('Error whie calling the api', error.message);
        return error.message;
    }
}