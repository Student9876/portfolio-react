import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
function ContactMe() {

    const [emailData, setEmaildata] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleChange(event) {
        const inputName = event.target.name;
        const newValue = event.target.value;

        setEmaildata(prevValue => {
            if (inputName === "name") {
                return {
                    name: newValue,
                    email: prevValue.email,
                    subject: prevValue.subject,
                    message: prevValue.message
                };
            }
            else if (inputName === "email") {
                return {
                    name: prevValue.name,
                    email: newValue,
                    subject: prevValue.subject,
                    message: prevValue.message
                };
            }
            else if (inputName === "subject") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    subject: newValue,
                    message: prevValue.message
                }
            }
            else if (inputName === "message") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    subject: prevValue.subject,
                    message: newValue
                }
            }
        })
    }

    return (
        <div id="contactme" className="contactMeDiv">
            <h1 className="h1-responsive text-center">Contact me</h1>
            <p className="text-center w-responsive mb-5">Do you have any queries? Please do not hesitate to contact me directly.</p>
            <form>

                <Row>
                    <Col md={6}>
                        <input onChange={handleChange} value={emailData.name} type="text" id="name" name="name" class="form-control" />
                        <label for="name" class="">Your name</label>
                    </Col>
                    <Col md={6}>
                        <input onChange={handleChange} value={emailData.email} type="text" id="email" name="email" class="form-control" />
                        <label for="email" className="">Your email</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input onChange={handleChange} value={emailData.subject} type="text" id="subject" name="subject" class="form-control" />
                        <label for="subject" className="">Subject</label>
                    </Col>
                </Row>
                <Row>
                    <textarea onChange={handleChange} value={emailData.message} type="text" id="message" name="message" rows="4" className="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                </Row>
            </form>
            <center>
                <a className="btn btn-dark" href={"mailto:shouvik9876@gmail.com?subject=" + emailData.subject + "&body=" + emailData.message + "\n Name: " + emailData.name + "\n Email: " + emailData.email}>Send an Email</a>
            </center>
        </div>
    )
}

export default ContactMe;