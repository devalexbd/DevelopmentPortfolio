import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'

function App() {


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
          <p>Here is some more text.</p>
          <p className="code-text">&#10101;&#47;&#62;</p>
        </div>
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