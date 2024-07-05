import '../assets/styles/Header.css'

export default function Header(){

    return(
        <>
            <div className="header">
                <div className="header-button">
                    <a href="/">Home</a>
                </div>
                <div className="header-button">
                    <a href="/aboutme">About Me</a>
                </div>
                <div className="header-button">
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </>
    )
}