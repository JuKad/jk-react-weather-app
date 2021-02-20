import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div style={{backgroundImage: 'url("https://wallpapercave.com/wp/wp4782848.jpg")'}}>
        <h1>
         Weather App
      </h1>
        <Weather />
          <footer>
            This project was coded by Juliana Kadlecova and is {" "}
          <a 
          href="https://github.com/JuKad/jk-react-weather-app"
          target="_blank" >
          open-sourced on GibHub.
          </a>
          </footer>
      </div>
      </div>
    </div>
  );
}

