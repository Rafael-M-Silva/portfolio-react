import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function ScrollToTop() {
  const {pathname} = useLocation();

  useLayoutEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname]);
  return null;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
