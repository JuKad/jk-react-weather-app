import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
        <h2>
            {props.data.city}
        </h2>
        <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
        </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src={props.data.iconUrl} 
                    alt={props.data.description} 
                    width="110" />
                <span className="temperature">
                    {Math.round(props.data.temperature)} 
                </span> 
                <span className="unit">
                    °C 
                </span>
                </div>
                    <div className="col-6">
                        <li>
                            Humidity: {props.data.humidity} %
                        </li>
                        <li>
                            Wind: {props.data.wind} km/h               
                        </li>
                    </div>
                </div>
    </div>
    );
}
    