import React from 'react'

/*
  Elite, more colorful background animation
  - Bolder gold/burgundy/purple glows
  - Aurora color waves that drift
  - Enhanced stage beams
  - Subtle twinkling particles
  - Rhythm lines + ribbons + film grain
*/
export default function Background() {
  const sparkles = [
    {left:'8%', top:'18%', size:6, delay:'0s', dur:'5.5s'},
    {left:'22%', top:'30%', size:4, delay:'0.8s', dur:'6.2s'},
    {left:'35%', top:'12%', size:5, delay:'1.1s', dur:'5.8s'},
    {left:'48%', top:'22%', size:4, delay:'0.3s', dur:'6.6s'},
    {left:'62%', top:'16%', size:6, delay:'1.6s', dur:'5.4s'},
    {left:'76%', top:'26%', size:5, delay:'0.4s', dur:'6.0s'},
    {left:'88%', top:'20%', size:4, delay:'1.2s', dur:'5.7s'},

    {left:'12%', top:'58%', size:5, delay:'0.2s', dur:'6.3s'},
    {left:'28%', top:'64%', size:4, delay:'1.0s', dur:'5.9s'},
    {left:'40%', top:'72%', size:6, delay:'0.6s', dur:'6.1s'},
    {left:'54%', top:'62%', size:5, delay:'1.4s', dur:'5.6s'},
    {left:'68%', top:'70%', size:4, delay:'0.9s', dur:'6.4s'},
    {left:'82%', top:'66%', size:5, delay:'1.8s', dur:'5.5s'},
    {left:'92%', top:'74%', size:4, delay:'0.7s', dur:'6.5s'},
  ]

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Soft vignette for focus */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(1400px 900px at 50% 20%, rgba(255,255,255,0.10), transparent 60%)',
      }} />

      {/* Bolder glow orbs (gold, burgundy, purple) */}
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50 animate-orb" style={{
        background: 'radial-gradient(circle at 30% 30%, #F5C76B, rgba(245,199,107,0.0) 60%)'
      }} />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-45 animate-orb-delayed" style={{
        background: 'radial-gradient(circle at 60% 40%, #8B1E3F, rgba(139,30,63,0.0) 65%)'
      }} />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-45 animate-orb-alt" style={{
        background: 'radial-gradient(circle at 40% 60%, #6D28D9, rgba(109,40,217,0.0) 60%)'
      }} />

      {/* Aurora color waves */}
      <div className="absolute inset-0 mix-blend-screen opacity-[0.45]">
        <div className="absolute -inset-8 blur-[40px] rounded-[48px] animate-aurora" style={{
          background: 'linear-gradient(90deg, rgba(245,199,107,0.22), rgba(139,92,246,0.18), rgba(236,72,153,0.20))',
          maskImage: 'radial-gradient(60% 50% at 50% 45%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(60% 50% at 50% 45%, black 60%, transparent 100%)'
        }} />
        <div className="absolute -inset-16 blur-[50px] rounded-[64px] animate-aurora-rev" style={{
          background: 'linear-gradient(90deg, rgba(147,51,234,0.18), rgba(245,199,107,0.22), rgba(190,24,93,0.20))',
          maskImage: 'radial-gradient(70% 55% at 50% 55%, black 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(70% 55% at 50% 55%, black 55%, transparent 100%)'
        }} />
      </div>

      {/* Stage light beams with stronger presence */}
      <div className="absolute inset-0 opacity-[0.38] mix-blend-screen">
        <div className="absolute -inset-1 animate-beams" style={{
          background: 'conic-gradient(from 200deg at 60% 10%, rgba(255,214,165,0.16), rgba(255,214,165,0.0) 32%, rgba(139,92,246,0.16) 50%, rgba(139,92,246,0.0) 64%, rgba(244,114,182,0.16) 78%, rgba(244,114,182,0.0) 92%)'
        }} />
        <div className="absolute -inset-1 animate-beams-rev" style={{
          background: 'conic-gradient(from 320deg at 40% 0%, rgba(245,199,107,0.14), rgba(245,199,107,0.0) 28%, rgba(190,24,93,0.14) 52%, rgba(190,24,93,0.0) 70%, rgba(147,51,234,0.14) 86%, rgba(147,51,234,0.0) 100%)'
        }} />
      </div>

      {/* Rhythm lines (subtle horizontal flow) */}
      <div className="absolute inset-x-0 top-1/3 h-56 opacity-25">
        <div className="h-full w-[220%] animate-lines bg-[length:44px_100%]" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(250,250,250,0.08) 0 2px, transparent 2px 44px)'
        }} />
      </div>

      {/* Curved smoke-light ribbons reminiscent of tango/salsa motion */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbon1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(245,199,107,0.0)"/>
            <stop offset="40%" stopColor="rgba(245,199,107,0.55)"/>
            <stop offset="100%" stopColor="rgba(245,199,107,0.0)"/>
          </linearGradient>
          <linearGradient id="ribbon2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(168,85,247,0.0)"/>
            <stop offset="50%" stopColor="rgba(168,85,247,0.45)"/>
            <stop offset="100%" stopColor="rgba(168,85,247,0.0)"/>
          </linearGradient>
        </defs>
        <path className="animate-ribbon1" d="M -200 500 C 200 350, 600 650, 1000 420 S 1600 550, 1800 420" fill="none" stroke="url(#ribbon1)" strokeWidth="28" strokeLinecap="round"/>
        <path className="animate-ribbon2" d="M -220 620 C 200 520, 680 760, 1100 520 S 1600 660, 1820 540" fill="none" stroke="url(#ribbon2)" strokeWidth="22" strokeLinecap="round"/>
      </svg>

      {/* Sparkling particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s, i) => (
          <span key={i}
            className="absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.45)] animate-twinkle"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: 0.6,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.35))',
              ['--twinkle-delay']: s.delay,
              ['--twinkle-dur']: s.dur,
            }}
          />
        ))}
      </div>

      {/* Gentle noise overlay to add cinematic texture */}
      <div className="absolute inset-0 opacity-[0.045] pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/><feComponentTransfer><feFuncA type=\'table\' tableValues=\'0 0.35\'/></feComponentTransfer></filter><rect width=\'100%\' height=\'100%\' filter=\'url(#n)\' /></svg>")'
      }} />
    </div>
  )
}
