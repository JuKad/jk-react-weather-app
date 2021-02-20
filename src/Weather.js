import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
 const [weatherData,setWeatherData] = useState({ready: false});


    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
       
    }

    if (weatherData.ready){
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
                    <li><FormattedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                    </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt={weatherData.description} width="110" />
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
            let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading.."
        }
    }