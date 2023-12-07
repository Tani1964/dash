import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarContextProvider } from './contexts/SidebarContextProvider.jsx'
import "react-big-calendar/lib/css/react-big-calendar.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarContextProvider>
    <App />
    </SidebarContextProvider>
  </React.StrictMode>,
)
