import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './App.css'
import Router from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
