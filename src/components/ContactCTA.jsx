function ContactCTA() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih! Kami akan menghubungi Anda segera.')
  }

  return (
    <section id="contact" className="relative bg-[#0A0A0F] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(79,70,229,0.25),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Mulai Perjalanan Sehat Mental Anda
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Jadwalkan sesi perkenalan gratis selama 15 menit. Bicarakan tujuan Anda dan lihat pendekatan yang paling cocok.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-purple-400" />
                Privasi dan kerahasiaan terjamin.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-purple-400" />
                Terapis berlisensi dan berpengalaman.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-purple-400" />
                Pendekatan berbasis bukti dan humanis.
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-purple-500"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-purple-500"
                  placeholder="nama@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Telepon</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-purple-500"
                  placeholder="0812-xxxx-xxxx"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-purple-500"
                  placeholder="Ceritakan kebutuhan Anda"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:from-purple-600 hover:to-indigo-700"
            >
              Kirim Permintaan
            </button>
            <p className="mt-3 text-center text-xs text-white/60">Dengan mengirim, Anda menyetujui kebijakan privasi kami.</p>
          </form>
        </div>

        <div id="about" className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} MindSpace. Semua hak dilindungi.
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
