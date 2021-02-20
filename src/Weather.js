import React from "react";
import "./Weather.css";



export default function Weather(){
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
         <h3> Tallinn</h3>
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