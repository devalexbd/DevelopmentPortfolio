import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import projectData from './assets/projects.json'
import ProjectPreview from './components/ProjectPreview'
import codeData from './assets/coding.json'
import Code from './components/Code'

function App() {
  const [projects, setProjects] = useState(0)

  return (
    <>
      <Header />

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
          <p>This is my software development portfolio!</p>
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
            {projects === 0 &&
            projectData.map((project, index) => {
              if(project.current == "yes"){
                return(
                  <>
                    <ProjectPreview
                    image = {project.projectimage}
                    name = {project.projectname}
                    description = {project.description}
                    key = {index}
                    />
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
                    <ProjectPreview
                    image = {project.projectimage}
                    name = {project.projectname}
                    description = {project.description}
                    key = {index}
                    />
                  </>
                )
              }
            })
            }
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