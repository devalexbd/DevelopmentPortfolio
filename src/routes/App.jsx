// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import { useState, useRef, useEffect } from 'react'
import '../assets/styles/App.css'
import projectData from '../data/projects.json'
import ProjectPreview from '../components/ProjectPreview'
import codeData from '../data/coding.json'
import Code from '../components/Code'

function App() {
  const [projects, setProjects] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(2)

  const swiperRef = useRef(null)

  useEffect(() => {
    if(swiperRef.current){
      swiperRef.current.swiper.update()
    }
  }, [projects])

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 850){
        setSlidesPerView(1)
      } else {
        setSlidesPerView(2)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  })

  function openProject(URL){
    if(URL != ""){
        window.open(URL, '_blank')
    }
  }

  return (
    <>
      <div className="section">
        <p className="code-text">&#60;Title </p>
        <div className="title">
          <p className="code-text">name = &#10100;</p>
          <h1>Alex Dunkley</h1>
          <p className="code-text">&#10101;</p>
        </div>
        <div className="title">
          <p className="code-text">role = &#10100;</p>
          <h2>Software Developer</h2>
          <p className="code-text">&#10101;</p>
        </div>
        <div className="title">
          <p className="code-text">description = &#10100;</p>
          <p className="section-description">Developer based in Bristol, UK.</p>
          <p className="code-text">&#10101;&#47;&#62;</p>
        </div>
      </div>

      <div className="info-box">
        <div className="sub-section">
          <div className="sub-section-button-box">
            <button onClick={() => setProjects(0)} className={`project-button ${projects == 0 ? 'selected' : ''}`}>Current Projects</button>
            <button onClick={() => setProjects(1)} className={`project-button ${projects == 1 ? 'selected' : ''}`}>Old Projects</button>
          </div>
          <div className="project-section">
            <swiper-container ref={swiperRef} slides-per-view={slidesPerView} speed="500" loop="false" css-mode="true" navigation="true" pagination="true">
            {projects === 0 &&
            projectData.map((project, index) => {
              if(project.current == "yes"){
                return(
                  <>
                    <swiper-slide key={index}>
                      <div className="project-slide" onClick={() => openProject(project.link)} key={index}>
                        <img src={project.projectimage} alt="Project Image" className='swiper-image'/>
                        <h4>{project.projectname}</h4>
                        <p>{project.description}</p>
                      </div>
                    </swiper-slide>
                  </>
                )
              }
            })

            }
            {projects === 1 &&
            projectData.map((project, index) => {
              if(project.current == "no"){
                return(
                  <>
                    <swiper-slide key={index}>
                      <div className="project-slide" onClick={() => openProject(project.link)}>
                        <img src={project.projectimage} alt="Project Image" className='swiper-image'/>
                        <h4>{project.projectname}</h4>
                        <p>{project.description}</p>
                      </div>
                    </swiper-slide>
                  </>
                )
              }
            })
            }
            </swiper-container>
          </div>
        </div>

        <div className="sub-section">
          <h1>My Coding Experience:</h1>
          <div className="code-section">
            {codeData.map((code, index) => {
              return(
                <>
                  <Code 
                  name = {code.codename}
                  image = {code.codelogo}
                  key = {index}
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>

      <div className="background-element">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

      </div>

    </>
  )
}

export default App