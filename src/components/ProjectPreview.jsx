import '../assets/styles/ProjectPreview.css'

export default function ProjectPreview({image, name, description, key}){

    return(
        <>
            <div className="project-thumbnail" key={key}>
                <img src={image} alt="Project Thumbnail" />
                <div className="project-thumbnail-info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}