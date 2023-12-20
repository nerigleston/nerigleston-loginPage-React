import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './router/index.jsx'
import { AuthProvider } from './components/authContext/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routers />
    </AuthProvider>
  </React.StrictMode>,
)
