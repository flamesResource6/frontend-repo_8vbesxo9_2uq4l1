import React from 'react'
import { motion } from 'framer-motion'

const aboutImages = [
  'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
]

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 pb-16 mx-auto max-w-7xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Hakkımızda
        </motion.h1>
        <p className="mt-4 text-zinc-300 max-w-3xl">
          Dans Keyfi 111; misyonu dansın dönüştürücü gücünü herkesle buluşturmak olan modern bir sanat topluluğudur. Vizyonumuz, enerjik ama zarif bir atmosferde her seviyeden dansçının kendini ifade edebildiği kapsayıcı bir alan kurmak. Deneyimli eğitmen kadromuz, teknik temelleri sağlamlaştırırken özgün stilinizi keşfetmenize yardımcı olur.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <img src={src} alt="studio" className="h-64 w-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-fuchsia-600/40 to-indigo-600/40 mb-4" />
              <div className="font-semibold mb-1">Değiştirilebilir Simge {i}</div>
              <div className="text-zinc-400 text-sm">Bu alan, simgelerin ve görsellerin kolayca güncellenebilmesi için placeholder olarak tasarlanmıştır.</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
              <div className="font-semibold mb-2">Eğitmen {i}</div>
              <div className="h-48 w-full overflow-hidden rounded-lg bg-zinc-800" />
              <div className="text-zinc-400 text-sm mt-2">Eğitmen fotoğrafı ve bilgileri burada düzenlenebilir.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
