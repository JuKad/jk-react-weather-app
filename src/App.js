import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>
         Weather App
      </h1>
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
  );
}

