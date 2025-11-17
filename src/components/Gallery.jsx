import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Fotoğraf Galerisi</h2>
          <p className="mt-2 text-zinc-400">Stüdyomuzdan kareler</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="overflow-hidden rounded-xl bg-zinc-900"
            >
              <img src={src} alt="gallery" className="h-48 w-full object-cover md:h-56 lg:h-64" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
