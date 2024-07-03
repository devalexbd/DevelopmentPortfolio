import '../assets/styles/Header.css'

export default function Header(){

    return(
        <>
            <div className="header">
                <div className="header-button">
                    <h3>Home</h3>
                </div>
                <div className="header-button">
                    <h3>About Me</h3>
                </div>
                <div className="header-button">
                    <h3>Contact</h3>
                </div>
            </div>
        </>
    )
}