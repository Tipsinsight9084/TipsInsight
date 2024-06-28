import React from 'react'
import {SpeedInsights} from '@vercel/speed-insights/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Analytics/>
  </BrowserRouter>,
)
