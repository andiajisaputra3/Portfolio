import React, { useLayoutEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import MyService from './components/MyService/MyService'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Welcome from './components/Welcome/Welcome'

// Gsap Animation
import gsap from 'gsap'
import { AnimateWelcome } from './utils/animation'

function App() {
  const welcomeRef = useRef(null)
  const [showWelcome, setShowWelcome] = useState(true)

  useLayoutEffect(() => {
    const visited = localStorage.getItem('Visited')

    if (visited) {
      setShowWelcome(false); // false
    } else {
      let ctx = gsap.context(() => {
        AnimateWelcome(() => {
          setShowWelcome(true); //true
          localStorage.setItem('Visited', 'true')
        })
      }, welcomeRef)
      return () => ctx.revert();
    }
  }, [])

  return (
    <div ref={welcomeRef}>
      {showWelcome && <Welcome />}
      <div id='mainContent'>
        <Navbar />
        <div id='home'>
          <Header />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='myservice'>
          <MyService />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
