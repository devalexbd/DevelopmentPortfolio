import '../assets/styles/ProjectPreview.css'

export default function ProjectPreview({image, name, description, key, link}){

    function openProject(URL){
        if(URL != ""){
            window.open(URL, '_blank')
        }
    }

    return(
        <>
            <div className="project-thumbnail" key={key} onClick={() => openProject(link)}>
                <img src={image} alt="Project Thumbnail" />
                <div className="project-thumbnail-info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}