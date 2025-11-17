import React from 'react'

/*
  Elegant, dance-themed background animation
  - Warm gold, burgundy, and purple soft glows
  - Subtle flowing "stage light" beams
  - Gentle rhythm lines moving horizontally
  - Extremely lightweight (pure CSS animations)
  - Sits behind all content (fixed + -z-10)
*/
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Soft vignette for focus */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(1200px 800px at 50% 20%, rgba(255,255,255,0.06), transparent 60%)',
      }} />

      {/* Glow orbs (gold, burgundy, purple) */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30 animate-orb" style={{
        background: 'radial-gradient(circle at 30% 30%, #F5C76B, rgba(245,199,107,0.0) 60%)'
      }} />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 animate-orb-delayed" style={{
        background: 'radial-gradient(circle at 60% 40%, #7C2A2A, rgba(124,42,42,0.0) 65%)'
      }} />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-25 animate-orb-alt" style={{
        background: 'radial-gradient(circle at 40% 60%, #5B2A86, rgba(91,42,134,0.0) 60%)'
      }} />

      {/* Stage light beams with soft motion */}
      <div className="absolute inset-0 opacity-[0.28] mix-blend-screen">
        <div className="absolute -inset-1 animate-beams" style={{
          background: 'conic-gradient(from 210deg at 60% 10%, rgba(255,214,165,0.08), rgba(255,214,165,0.0) 30%, rgba(139,92,246,0.08) 45%, rgba(139,92,246,0.0) 60%, rgba(244,114,182,0.08) 75%, rgba(244,114,182,0.0) 90%)'
        }} />
        <div className="absolute -inset-1 animate-beams-rev" style={{
          background: 'conic-gradient(from 310deg at 40% 0%, rgba(245,199,107,0.07), rgba(245,199,107,0.0) 25%, rgba(190,24,93,0.07) 50%, rgba(190,24,93,0.0) 70%, rgba(147,51,234,0.07) 85%, rgba(147,51,234,0.0) 100%)'
        }} />
      </div>

      {/* Rhythm lines (subtle horizontal flow) */}
      <div className="absolute inset-x-0 top-1/3 h-56 opacity-20">
        <div className="h-full w-[200%] animate-lines bg-[length:40px_100%]" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(250,250,250,0.06) 0 2px, transparent 2px 40px)'
        }} />
      </div>

      {/* Curved smoke-light ribbons reminiscent of tango/salsa motion */}
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbon1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(245,199,107,0.0)"/>
            <stop offset="40%" stopColor="rgba(245,199,107,0.45)"/>
            <stop offset="100%" stopColor="rgba(245,199,107,0.0)"/>
          </linearGradient>
          <linearGradient id="ribbon2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(168,85,247,0.0)"/>
            <stop offset="50%" stopColor="rgba(168,85,247,0.35)"/>
            <stop offset="100%" stopColor="rgba(168,85,247,0.0)"/>
          </linearGradient>
        </defs>
        <path className="animate-ribbon1" d="M -200 500 C 200 350, 600 650, 1000 420 S 1600 550, 1800 420" fill="none" stroke="url(#ribbon1)" strokeWidth="28" strokeLinecap="round"/>
        <path className="animate-ribbon2" d="M -220 620 C 200 520, 680 760, 1100 520 S 1600 660, 1820 540" fill="none" stroke="url(#ribbon2)" strokeWidth="22" strokeLinecap="round"/>
      </svg>

      {/* Gentle noise overlay to add cinematic texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/><feComponentTransfer><feFuncA type=\'table\' tableValues=\'0 0.35\'/></feComponentTransfer></filter><rect width=\'100%\' height=\'100%\' filter=\'url(#n)\' /></svg>")'
      }} />
    </div>
  )
}
