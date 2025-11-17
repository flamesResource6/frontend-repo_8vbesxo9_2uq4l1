import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FixedActions from './components/FixedActions'
import Background from './components/Background'
import Hero from './components/Hero'
import Dances from './components/Dances'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import About from './pages/About'

function HomePage() {
  return (
    <div className="bg-black">
      <Hero />
      <Dances />
      <Gallery />
      <MapSection />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Site-wide elegant background animation */}
      <Background />
      <Navbar />
      <FixedActions />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<About />} />
      </Routes>
    </div>
  )
}
