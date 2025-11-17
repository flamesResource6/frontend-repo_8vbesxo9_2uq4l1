import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Vertical legibility gradient over site-wide animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70 pointer-events-none" />

      {/* Soft stage spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(800px 500px at 50% 35%, rgba(255,255,255,0.10), rgba(0,0,0,0) 60%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Elite dance animation localized behind the title */}
        <div className="relative mb-2">
          {/* Animated conic spotlight sweep */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-screen"
            style={{
              width: '64vmin',
              height: '64vmin',
              filter: 'blur(12px)',
              borderRadius: '9999px',
              animation: 'spin 22s linear infinite',
              background:
                'conic-gradient(from 210deg, rgba(245,199,107,0.25), rgba(245,199,107,0.0) 20%, rgba(139,92,246,0.22) 40%, rgba(139,92,246,0.0) 60%, rgba(190,24,93,0.22) 80%, rgba(190,24,93,0.0) 100%)',
            }}
          />

          {/* Subtle gold/burgundy/purple glow orbs */}
          <div
            aria-hidden
            className="absolute -left-20 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40"
            style={{
              background:
                'radial-gradient(circle at 40% 40%, rgba(245,199,107,0.6), rgba(245,199,107,0.0) 65%)',
              animation: 'orb 12s ease-in-out infinite',
            }}
          />
          <div
            aria-hidden
            className="absolute -right-16 top-2 h-44 w-44 rounded-full blur-3xl opacity-35"
            style={{
              background:
                'radial-gradient(circle at 60% 40%, rgba(124,42,42,0.55), rgba(124,42,42,0.0) 65%)',
              animation: 'orb 16s ease-in-out 0.6s infinite',
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 -bottom-10 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl opacity-35"
            style={{
              background:
                'radial-gradient(circle at 50% 60%, rgba(91,42,134,0.55), rgba(91,42,134,0.0) 65%)',
              animation: 'orb 18s ease-in-out 0.2s infinite',
            }}
          />

          {/* Flowing ribbon underline (tango-like curve) */}
          <svg
            aria-hidden
            className="absolute left-1/2 top-full -translate-x-1/2 mt-4 opacity-70"
            width="560"
            height="56"
            viewBox="0 0 560 56"
            fill="none"
          >
            <defs>
              <linearGradient id="heroRibbon1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(245,199,107,0.0)" />
                <stop offset="40%" stopColor="rgba(245,199,107,0.6)" />
                <stop offset="100%" stopColor="rgba(245,199,107,0.0)" />
              </linearGradient>
              <linearGradient id="heroRibbon2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(168,85,247,0.0)" />
                <stop offset="50%" stopColor="rgba(168,85,247,0.45)" />
                <stop offset="100%" stopColor="rgba(168,85,247,0.0)" />
              </linearGradient>
            </defs>
            <path
              className="animate-ribbon1"
              d="M 0 32 C 120 8, 240 48, 360 18 S 520 40, 560 18"
              stroke="url(#heroRibbon1)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              className="animate-ribbon2"
              d="M 0 44 C 140 28, 240 56, 360 26 S 520 56, 560 34"
              stroke="url(#heroRibbon2)"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>

          {/* Title + subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]"
          >
            Dans Keyfi 111
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 max-w-2xl text-zinc-200 text-lg sm:text-xl"
        >
          Profesyonel eğitmenlerle her yaşa uygun dans dersleri. Kendini müziğin akışına bırak!
        </motion.p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-zinc-300 text-sm"
        >
          Aşağı kaydır
        </motion.div>
      </div>

      {/* additional minimal motion keyframes for local sweep */}
      <style>{`
        @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>
    </section>
  )
}
