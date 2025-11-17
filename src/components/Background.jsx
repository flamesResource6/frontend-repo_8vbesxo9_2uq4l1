import React from 'react'

/*
  Premium 3D dance stage background (high-visibility)
  - Perspective stage with luminous rotating rings
  - Sweeping spotlights (static tilt for readability)
  - Floating ribbons that drift in 3D
  - Rising sparkles with depth (no transform conflicts)
*/
export default function Background() {
  const sparkles = Array.from({ length: 28 }).map((_, i) => ({
    left: `${(i * 37) % 100}%`,
    depth: ((i % 7) - 3) * 80, // -240 .. 240
    size: 3 + (i % 4),
    delay: `${(i % 5) * 0.6}s`,
    dur: `${6 + (i % 6)}s`,
  }))

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* 3D space */}
      <div className="absolute inset-0" style={{ perspective: '1200px', perspectiveOrigin: '50% 40%' }}>
        {/* Glow vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(1200px 700px at 50% 30%, rgba(255,255,255,0.12), transparent 60%)',
          mixBlendMode: 'screen'
        }} />

        {/* Stage floor (tilted) */}
        <div className="absolute left-1/2 top-[62%] w-[130vmax] h-[130vmax] -translate-x-1/2 rounded-full opacity-80" style={{
          transform: 'rotateX(75deg) translateZ(-200px)',
          background: 'radial-gradient(circle at 50% 50%, rgba(250, 208, 87, 0.35) 0%, rgba(139,92,246,0.22) 35%, rgba(190,24,93,0.18) 55%, rgba(0,0,0,0) 70%)',
          filter: 'blur(2px)'
        }} />

        {/* Rotating energy rings */}
        {[-280, -80, 120, 280].map((z, idx) => (
          <div key={idx}
            className="absolute left-1/2 top-[58%] w-[95vmin] h-[95vmin] -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              '--ring-z': `${z}px`,
              transform: 'rotateX(75deg) translateZ(var(--ring-z))',
              border: '2px solid rgba(245,199,107,0.25)',
              boxShadow: '0 0 40px rgba(245,199,107,0.25), inset 0 0 30px rgba(147,51,234,0.25)'
            }}
          >
            <div className="absolute inset-0 rounded-full animate-ring-spin" style={{
              maskImage: 'conic-gradient(from 0deg, black 0 82%, transparent 82% 100%)',
              WebkitMaskImage: 'conic-gradient(from 0deg, black 0 82%, transparent 82% 100%)',
              background: 'conic-gradient(from 0deg, rgba(245,199,107,0.0), rgba(245,199,107,0.85), rgba(168,85,247,0.85), rgba(236,72,153,0.85), rgba(245,199,107,0.0))',
              filter: 'blur(0.5px)'
            }} />
          </div>
        ))}

        {/* Static spotlights for clarity */}
        {[
          { x: '36%', rot: -18 },
          { x: '50%', rot: 0 },
          { x: '64%', rot: 16 },
        ].map((b, i) => (
          <div key={i} className="absolute top-[5%] opacity-80 mix-blend-screen"
            style={{ left: b.x, width: '28vmax', height: '80vmax', transform: `translateX(-50%) rotate(${b.rot}deg) rotateX(60deg)`,
              background: 'conic-gradient(from 180deg at 50% 0%, rgba(250,208,87,0.22), rgba(250,208,87,0.0) 25%, rgba(147,51,234,0.20) 55%, rgba(147,51,234,0.0) 72%, rgba(236,72,153,0.18) 90%, rgba(236,72,153,0.0) 100%)' }}
          />
        ))}

        {/* 3D dancing ribbons */}
        {[0, 1].map((k) => (
          <div key={k} className="absolute left-1/2 top-[35%] w-[80vmin] h-[40vmin] -translate-x-1/2 opacity-80 pointer-events-none"
            style={{ transformStyle: 'preserve-3d', transform: `translateZ(${k ? 160 : -120}px) rotateX(12deg)` }}>
            <div className="absolute inset-0 rounded-[48px] blur-[10px] animate-float-z"
              style={{
                animationDelay: k ? '0.8s' : '0s',
                animationDuration: k ? '18s' : '14s',
                transformStyle: 'preserve-3d',
                background: k
                  ? 'linear-gradient(120deg, rgba(147,51,234,0.65), rgba(245,199,107,0.65), rgba(236,72,153,0.65))'
                  : 'linear-gradient(120deg, rgba(245,199,107,0.65), rgba(236,72,153,0.65), rgba(147,51,234,0.65))',
                maskImage: 'radial-gradient(160% 80% at 50% 50%, black 35%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(160% 80% at 50% 50%, black 35%, transparent 70%)',
                mixBlendMode: 'screen'
              }}
            />
            {/* rib wireframe */}
            <div className="absolute inset-0 rounded-[48px] opacity-60" style={{
              border: '1px dashed rgba(255,255,255,0.12)',
              transform: 'rotateY(35deg)'
            }} />
          </div>
        ))}

        {/* Rising sparkles with depth parallax (animate bottom/opacity only) */}
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((s, i) => (
            <span key={i}
              className="absolute bg-white/85 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.45)] animate-rise-bottom"
              style={{
                left: s.left,
                bottom: '-6%',
                width: s.size,
                height: s.size,
                transform: `translateZ(${s.depth}px)`,
                animationDelay: s.delay,
                animationDuration: s.dur,
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.35))'
              }}
            />
          ))}
        </div>

        {/* Subtle film grain */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/><feComponentTransfer><feFuncA type=\'table\' tableValues=\'0 0.35\'/></feComponentTransfer></filter><rect width=\'100%\' height=\'100%\' filter=\'url(#n)\' /></svg>")'
        }} />
      </div>
    </div>
  )
}
