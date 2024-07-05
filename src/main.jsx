import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Contact from './routes/Contact.jsx'
import App from './routes/App.jsx'
import AboutMe from './routes/AboutMe.jsx'

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<App />}/>
        <Route path="aboutme" element={<AboutMe />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Routes>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)
