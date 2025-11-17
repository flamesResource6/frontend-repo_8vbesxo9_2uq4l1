import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const categories = [
  {
    title: 'Yetişkin Dansları',
    items: [
      { name: 'Salsa', desc: 'Latin ritimleriyle enerjik ve eğlenceli adımlar', icon: 'placeholder' },
      { name: 'Bachata', desc: 'Dominik kökenli akıcı ve romantik figürler', icon: 'placeholder' },
      { name: 'Tango', desc: 'Tutkunun dansı, zarif liderlik ve takip', icon: 'placeholder' },
      { name: 'Zumba', desc: 'Kardiyo odaklı ritmik fitness deneyimi', icon: 'placeholder' },
      { name: 'Oryantal', desc: 'Doğunun estetiğiyle vücut izolasyonları', icon: 'placeholder' },
      { name: 'Hiphop', desc: 'Dinamik groove ve urban stil', icon: 'placeholder' },
    ],
  },
  {
    title: 'Çocuk Dansları & Cimnastik',
    items: [
      { name: 'Çocuk Dansları', desc: 'Ritim duygusunu geliştirici yaratıcı atölyeler', icon: 'placeholder' },
      { name: 'Cimnastik', desc: 'Esneklik ve koordinasyon için temel çalışmalar', icon: 'placeholder' },
    ],
  },
  {
    title: 'Düğün Dansları',
    items: [
      { name: 'İlk Dans', desc: 'Özel gününüz için size özel koreografi', icon: 'placeholder' },
      { name: 'Giriş Dansı', desc: 'Enerjik ve etkileyici başlangıç anı', icon: 'placeholder' },
    ],
  },
  {
    title: 'Özel Programlar',
    items: [
      { name: 'Birebir Eğitim', desc: 'Kişiye özel plan ve esnek saatler', icon: 'placeholder' },
      { name: 'Grup Çalışmaları', desc: 'Ekip ruhunu güçlendiren atölyeler', icon: 'placeholder' },
      { name: 'Performans Hazırlığı', desc: 'Sahne öncesi teknik ve sunum çalışmaları', icon: 'placeholder' },
    ],
  },
]

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i } }),
}

function DanceItem({ item, index }) {
  return (
    <motion.div custom={index} variants={itemVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="group">
      <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-4 hover:bg-zinc-900 transition-colors">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600/40 to-indigo-600/40 text-white">
          {/* Placeholder icon wrapper. Replace Star with any icon later. */}
          <Star size={18} className="opacity-90" />
        </div>
        <div>
          <div className="text-white font-medium">{item.name}</div>
          <div className="text-zinc-400 text-sm">{item.desc}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Dances() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Danslarımız</h2>
          <p className="mt-2 text-zinc-400">Tüm seviyelere uygun kapsamlı programlar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-semibold text-white/90">{cat.title}</h3>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <DanceItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating light accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-700/20 blur-3xl" />
      </div>
    </section>
  )
}
