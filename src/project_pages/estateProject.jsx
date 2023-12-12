import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import estateAppImage1 from '../images/project_images/estate-app-1.png'
import estateAppImage2 from '../images/project_images/estate-app-2.png'

import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";


function EstateProject() {


    return (
        <div>
            <NavbarComponent />
            <ScrollToTop />
            <div id="waintro" className="introDiv">
                <center>
                    <h1 className="introh1">Estate Website</h1>
                </center>
                <p>
                    <ul>
                        <li className="">This is a <em>ReactJs</em> Based project.</li>
                        <li className="">This is a <strong>Estate Website</strong>. We use this type of websites to find property.</li>
                        <li className="">This website has 4-level filtering function which can be used to sort out data.</li>
                        <li className="">Bootstrap cards combined with ReactJs components helps to create a good looking UI for great user experience.</li>
                    </ul>
                </p>
            </div>


            {/* AboutDiv  */}
            <div className="aboutDiv">
                <h1>Preview</h1>
                <center>
                    <img id="frontImage" className="reveal fade-bottom" src={estateAppImage1} alt="estateapp_image" />
                    <br />
                    <img id="frontImage" className="reveal fade-bottom" src={estateAppImage2} alt="estateapp_image" />
                    
                </center>
            </div>

            <div className="sourceSection">
                <div className="sourceSectionDiv reveal fade-bottom">
                    <h1>Wanna try the app?</h1>
                    <h2> Click the below button to visit the Website</h2>
                    <button className="btn btn-primary btn-light" onClick={() => { window.open("https://estate-app.student9876.repl.co/", '_blank') }}>Estate App</button>
                </div>
                <div className="sourceSectionDiv reveal fade-bottom">
                    <h1>Source Code</h1>
                    <h2>Click the below button to visit <em>GitHub</em></h2>
                    <button className="btn btn-primary btn-light" onClick={() => { window.open("https://github.com/Student9876/estate-react", '_blank') }}>GitHub</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EstateProject; 