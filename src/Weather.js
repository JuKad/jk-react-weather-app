import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather(){
 const [ready, setReady] = useState(false);
 const [weatherData,setWeatherData] = useState({});


    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature:response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name
        });
       


        setReady(true);
    }

    if (ready){
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Type a city.." className="form-control" autoFocus="on"/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                    </div>      
                </form> 
                <br />
                <h2>{weatherData.city}</h2>
                <ul>
                    <li>Saturday 12:00</li>
                    <li>{weatherData.description}</li>
                    </ul>
                <div className="row">
                    <div className="col-6">
                        <img src="https://duckduckgo.com/assets/weather/svg/new/cloudy.svg" alt="Cloudy" width="110" />
                        <span className="temperature">
                            {Math.round(weatherData.temperature)} 
                        </span> 
                        <span className="unit">
                            °C 
                        </span>
                    </div>
                    <div className="col-6">
                        <li>
                            Humidity: {weatherData.humidity} %
                        </li>
                        <li>
                            Wind: {weatherData.wind} km/h               
                        </li>
                    </div>
                </div>
            </div>
            );
        } else {
            let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
            let city = "New York";
            let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading.."
        }
    }