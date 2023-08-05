import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import keeperAppImage1 from '../images/project_images/keeper-app-front.png'
import keeperAppImage2 from '../images/project_images/keeper-app-image-1.png'
import keeperAppImage3 from '../images/project_images/keeper-app-image-2.png'

import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";


function KeeperAppProject() {


    return (
        <div>
            <NavbarComponent />
            <ScrollToTop />
            <div id="waintro" className="introDiv">
                <center>
                    <h1 className="introh1">Keeper App</h1>
                </center>
                <p>
                    <ul>
                        <li className="">This is a <em>React</em> Based project in which I used <em>ReactJs</em> as frontend.</li>
                        <li className="">This app is a clone of <em>Google Keep</em> in which we keep our notes.</li>
                        <li className="">MongoDB Atlas is being used as a database in this app.</li>
                    </ul>
                </p>
            </div>


            {/* AboutDiv  */}
            <div className="aboutDiv">
                <h1>Preview</h1>
                <center>
                    <img id="frontImage" className="reveal fade-bottom" src={keeperAppImage1} alt="KeeperApp Image" />
                    <br />
                    <img id="frontImage" className="reveal fade-bottom" src={keeperAppImage2} alt="WeatherImage" />
                    <br />
                </center>
                <h1>Server Side</h1>
                <center>
                    <img id="frontImage" className="reveal fade-bottom" src={keeperAppImage3} alt="WeatherImage" />
                </center>
            </div>

            <div className="sourceSection">
                <div className="sourceSectionDiv reveal fade-bottom">
                    <h1>Wanna try the app?</h1>
                    <h2> Click the below button to visit the Website</h2>
                    <button className="btn btn-primary btn-light" disabled onClick={() => { window.open("https://keeper-app.student9876.repl.co/", '_blank') }}>Keeper App</button>
                    <h4>WebApp is currently not deployed. Please go through the source code and see the screenshots to get an idea of the app</h4>
                </div>
                <div className="sourceSectionDiv reveal fade-bottom">
                    <h1>Source Code</h1>
                    <h2>Click the below button to visit <em>GitHub</em></h2>
                    <button className="btn btn-primary btn-light" onClick={() => { window.open("https://github.com/Student9876/keeperapp-react", '_blank') }}>GitHub</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default KeeperAppProject; 