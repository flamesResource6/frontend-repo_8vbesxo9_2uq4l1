import React, { useEffect, useRef } from 'react'

export default function MapSection() {
  const mapRef = useRef(null)

  useEffect(() => {
    // Simple Google Maps embed with marker via iframe
    if (mapRef.current) {
      // Replace query with your studio address
      const query = encodeURIComponent('Dans Keyfi 111, Istanbul')
      mapRef.current.src = `https://www.google.com/maps?q=${query}&output=embed`
    }
  }, [])

  return (
    <section className="relative bg-black py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bizi Nerede Bulabilirsiniz?</h2>
        <p className="text-zinc-400 mb-6">Konumumuz haritada işaretlenmiştir.</p>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <iframe ref={mapRef} title="map" className="h-full w-full" loading="lazy" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
