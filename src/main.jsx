import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextDisProvider from './context/ContextDis.jsx'
import ContextLecProvider from './context/ContextLec.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextDisProvider>
      <ContextLecProvider>
        <App />
      </ContextLecProvider>
    </ContextDisProvider>
  </React.StrictMode>,
)
