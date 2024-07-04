import '../assets/styles/Code.css'

export default function Code({image, name, key}){

    return(
        <>
            <div className="code-segment" key={key}>
                <img src={image} alt="Coding Logo" />
                <h2>{name}</h2>
            </div>
        </>
    )
}