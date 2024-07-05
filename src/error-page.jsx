import './index.css'
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    return(
        <div id="error-page">
            <div className="error-message">
                <h1>Ahh! Error!</h1>
                <p>Something seems to have gone wrong. Sorry.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}