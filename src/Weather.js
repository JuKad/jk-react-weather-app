import React from "react";
import axios from "axios";
import "./Weather.css";



export default function Weather(){

    function handleResponse(response){
        console.log(response.data)
    }

    let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
    let city = "New York";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)


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
         <h2>Tallinn</h2>
         <ul>
             <li>Saturday 12:00</li>
             <li>Cloudy</li>
             </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://duckduckgo.com/assets/weather/svg/new/cloudy.svg" alt="Cloudy" width="110" />
                <span className="temperature">
                     -10 
                </span> 
                <span className="unit">
                    °C 
                </span>
            </div>
            <div className="col-6">
                <li>
                    Humidity: 90%
                </li>
                <li>
                    Wind: 10 km/h               
                </li>
            </div>
        </div>
    </div>
    );
}