import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import Contact from './routes/Contact.jsx'
import App from './routes/App.jsx'
import AboutMe from './routes/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "aboutme",
        element: <AboutMe />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
