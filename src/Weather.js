import React from "react";
import "./Weather.css";



export default function Weather(){
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-md-8">
                    <input type="search" placeholder="Type a city.." className="form-control"/>
                </div>
                <div className="col-6 col-md-4">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
            </div>      
        </form> 
         <h3> for Tallinn</h3>
         <ul>
             <li>Saturday 12:00</li>
             <li>Cloudy</li>
             </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://duckduckgo.com/assets/weather/svg/new/cloudy.svg"alt="Cloudy"/>
            -10° C 
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
    )
}