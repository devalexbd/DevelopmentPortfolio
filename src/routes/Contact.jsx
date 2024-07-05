import { Form } from "react-router-dom";
import '../assets/styles/Contact.css'

export default function Contact(){

    return(
        <>
            <div className="contact-box">
                <h1>If you wish to get in contact:</h1>
                <div className="contact-link">
                    <h4>LinkedIn:</h4><a href="https://www.linkedin.com/in/alex-dunkley-469b04209/" target="_blank">https://www.linkedin.com/in/alex-dunkley-469b04209/</a>
                </div>
                <div className="contact-link">
                    <h4>Email:</h4><a href="mailto:alex@alexbd.dev">alex@alexbd.dev</a>
                </div>
            </div>
        </>
    )
}