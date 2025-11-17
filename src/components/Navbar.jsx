import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Phone, MessageCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const NavButton = ({ children, href, icon: Icon, disabled }) => {
  const content = (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
      disabled
        ? 'bg-zinc-800 text-zinc-300 cursor-default'
        : 'bg-zinc-800/70 hover:bg-zinc-700 text-zinc-100'
    } border border-white/10 backdrop-blur-md`}> 
      {Icon && <Icon size={16} className="opacity-90" />} 
      {children}
    </div>
  )
  if (disabled || !href) return content
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default function Navbar() {
  const location = useLocation()
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-semibold tracking-wide">Dans Keyfi 111</Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : 'text-zinc-300'}`}>Ana Sayfa</Link>
          <Link to="/hakkimizda" className={`hover:text-white transition-colors ${location.pathname === '/hakkimizda' ? 'text-white' : 'text-zinc-300'}`}>Hakkımızda</Link>
        </div>
        <div className="flex items-center gap-2">
          <NavButton href="https://instagram.com/" icon={Instagram}>Instagram</NavButton>
          <NavButton href="https://wa.me/905555555555" icon={MessageCircle}>WhatsApp</NavButton>
          <NavButton disabled icon={Phone}>0 555 555 55 55</NavButton>
        </div>
      </div>
    </motion.nav>
  )
}
