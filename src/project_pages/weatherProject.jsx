import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import weatherImageSource from '../images/project_images/weather-app-front.png'
import weatherImageResult from '../images/project_images/weather-app-result.png'

import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";


function WeatherAppProject() {


    return (
        <div>
            <NavbarComponent />
            <ScrollToTop />
            <div id="waintro" className="introDiv">
                <center>
                    <h1 className="introh1">Weather App</h1>
                </center>
                <p>
                    <ul>
                        <li className="">This is a <em>React</em> Based project in which I used <em>ReactJs</em> as frontend.</li>
                        <li className="">The backend and API are also handled by <em>React</em> Modules </li>
                    </ul>
                </p>
            </div>


            {/* AboutDiv  */}
            <div className="aboutDiv">
                <h1>Preview</h1>
                <center>
                    <img className="reveal fade-bottom" src={weatherImageSource} alt="WeatherImage" />
                    <br />
                    <img className="reveal fade-bottom" src={weatherImageResult} alt="WeatherImage" />
                </center>
            </div>

            <div className="sourceSection">
                <div className="sourceSectionDiv">
                    <h1>Wanna try the app?</h1>
                    <h2> Click the below button to visit the Website</h2>
                    <button className="btn btn-primary btn-light" onClick={() => { window.open("https://weatherapp.student9876.repl.co/", '_blank') }}>Weather App</button>
                </div>
                <div className="sourceSectionDiv">
                    <h1>Source Code</h1>
                    <h2>Click the below button to visit <em>GitHub</em></h2>
                    <button className="btn btn-primary btn-light" onClick={() => { window.open("https://github.com/Student9876/weather_app_react.git", '_blank') }}>GitHub</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WeatherAppProject; 