import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import PodcastDetail from './components/PodcastDetail.jsx'
import podcastList from '../public/podcastList.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/podcast' element={<PodcastDetail/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
