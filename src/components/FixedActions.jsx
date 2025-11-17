import React from 'react'
import { Instagram, Phone, MessageCircle } from 'lucide-react'

export default function FixedActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2">
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 shadow-lg transition-colors">
        <Instagram size={16} /> Instagram
      </a>
      <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 text-white px-4 py-2 shadow-lg transition-colors">
        <MessageCircle size={16} /> WhatsApp
      </a>
      <div className="flex items-center gap-2 rounded-full bg-zinc-800 text-zinc-200 px-4 py-2 shadow-lg">
        <Phone size={16} /> 0 555 555 55 55
      </div>
    </div>
  )
}
