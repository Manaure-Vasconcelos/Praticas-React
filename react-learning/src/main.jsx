import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/Classes/App.jsx'
import Other from './Components/Classes/Other';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Other/>
  </React.StrictMode>,
)
