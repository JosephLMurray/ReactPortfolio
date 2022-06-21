import './App.scss'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import Dropdown from './components/Dropdown'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideNav = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideNav)

    return () => {
      window.removeEventListener('resize', hideNav)
    }
  })
  return (
    <div className="bg-bgHero container min-h-screen min-w-full justify-between flex flex-wrap">
      <Navigation toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
