
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'  // ⬅️ De hoofcomponent
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />  {/* ⬅️ Hier wordt App 'gemonteerd' */}
  </React.StrictMode>,
)
