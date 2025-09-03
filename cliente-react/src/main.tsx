/**
 * PUNTO DE ENTRADA DE LA APLICACIÓN REACT
 *
 * Este es el CLIENTE en la arquitectura Cliente-Servidor
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
