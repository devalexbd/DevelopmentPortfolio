import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header />

      <div className="section">
        <h1>Alex Dunkley</h1>
        <h2>Software Developer</h2>
        <p>Here is some more text.</p>
      </div>

      <div className="section-main">
        <div className="square-container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>


        <div className="sub-section">
          <h1>My Coding Experience:</h1>
          <ul>
            <li><img src="" alt="" /> HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default App