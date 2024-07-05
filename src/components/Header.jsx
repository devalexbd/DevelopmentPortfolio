import '../assets/styles/Header.css'
import { Link } from "react-router-dom"

export default function Header(){

    return(
        <>
            <div className="header">
                <div className="header-button">
                    <h3><Link to="/">Home</Link></h3>
                </div>
                <div className="header-button">
                    <h3><Link to="aboutme">About Me</Link></h3>
                </div>
                <div className="header-button">
                    <h3><Link to="contact">Contact</Link></h3>
                </div>
            </div>
        </>
    )
}