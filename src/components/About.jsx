import React from "react";
import myImage from '../images/profileImage.webp';
import myCollege from '../images/IIIT-Bhopal-NTB.jpg';


function About() {
    return (
        <div id="about" className="aboutDivBG">
            <table className="aboutElements reveal fade-bottom">
                <tr>
                    <td><img className="profileImage" src={myImage} alt="ProfileImage" /></td>
                    <td><h1 className="abouth1">I'm Shouvik Sutar</h1>
                    <p>
                        Barasat, Kolkata-700124, West Bengal
                    </p>
                    </td>
                </tr>
            </table>
            <table className="aboutElements reveal fade-bottom">
                <tr>
                    <td><h1 className="abouth1">Studying at IIIT Bhopal</h1>
                    <p>
                        Computer Science and Engineering, B.Tech 2nd Year
                    </p>
                    </td>
                    <td><img className="profileImage" src={myCollege} alt="ProfileImage" /></td>
                </tr>
            </table>
        </div>
    )
}

export default About;