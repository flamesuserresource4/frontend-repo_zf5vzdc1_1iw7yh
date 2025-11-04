import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay should not block interactions with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Ruang Sehat Mental Anda
          </span>
          <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Psikologi Modern yang Elegan & Penuh Empati
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Dapatkan dukungan profesional untuk memahami diri, mengelola emosi, dan membangun kebiasaan sehat. Pendekatan ilmiah dengan sentuhan hangat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:from-purple-600 hover:to-indigo-700"
            >
              Mulai Konsultasi
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Jelajahi Layanan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
