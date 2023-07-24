import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import imageBotFront from '../images/project_images/image-bot-front.png'
import imageBotResult1 from '../images/project_images/imagebot-result-1.png'
import imageBotResult2 from '../images/project_images/imagebot-result-2.png'

import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";


function ImageBotProject() {


    return (
        <div>
            <NavbarComponent />
            <ScrollToTop />
            <div id="waintro" className="introDiv">
                <center>
                    <h1 className="introh1">Image Bot Telegram</h1>
                </center>
                <p>
                    <ul>
                        <li className="">This is a <em>NodeJs</em> Based backend project.</li>
                        <li className="">In this project <a href="https://www.npmjs.com/package/telegraf">Telegraf</a> bot is used to handle the incoming message and replying to the text accordingly.</li>
                        <li className="">MongoDB Atlas is being used to store search Data from various user with the userData as to give further updates on this bot by sending messages to all the users.</li>
                        <li className="">This bot provides 4-5 HD source images with source and preview urls</li>
                        
                    </ul>
                </p>
            </div>


            {/* AboutDiv  */}
            <div className="aboutDiv">
                <h1>Preview</h1>
                <center>
                    <img id="frontImage" className="reveal fade-bottom" src={imageBotFront} alt="imagebotFront" />
                    <br/>
                    <img className="reveal fade-bottom" src={imageBotResult1} alt="imagebotresult1" />
                    <img className="reveal fade-bottom" src={imageBotResult2} alt="imagebotresult2" />
                </center>
            </div>

            <div className="sourceSection">
                <div className="sourceSectionDiv">
                    <h1>Wanna try the bot?</h1>
                    <h2> Click the below button to visit the Website</h2>
                    <button className="btn btn-primary btn-light" onClick={() => { window.open("http://t.me/imagebot99_bot", '_blank') }}>Image Bot</button>
                    <h4>If the link doesn't work then simply type this name <em style={{fontFamily:"monospace"}}>@imagebot99_bot</em> in telegram search box.</h4>
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

export default ImageBotProject; 