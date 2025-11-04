import { Brain, Heart, Sparkles, MessageCircle } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Terapi Individual',
    desc: 'Sesi privat untuk memahami pola pikir, emosi, dan perilaku. Disesuaikan dengan kebutuhan unik Anda.'
  },
  {
    icon: Heart,
    title: 'Kesehatan Emosional',
    desc: 'Strategi ilmiah untuk mengelola stres, kecemasan, dan burnout dengan empati dan kehangatan.'
  },
  {
    icon: Sparkles,
    title: 'Pengembangan Diri',
    desc: 'Bangun kebiasaan sehat, tingkatkan fokus, dan capai tujuan melalui kebiasaan yang berkelanjutan.'
  },
  {
    icon: MessageCircle,
    title: 'Konseling Pasangan',
    desc: 'Meningkatkan komunikasi, keintiman, dan pemahaman antar pasangan secara konstruktif.'
  },
]

function Services() {
  return (
    <section id="services" className="relative z-10 bg-gradient-to-b from-black to-[#0A0A0F] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Layanan Psikologi</h2>
          <p className="mt-3 text-white/70">
            Pendekatan terintegrasi berbasis bukti dengan pengalaman yang hangat dan menenangkan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition group-hover:opacity-70" />
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-3 text-white shadow-lg shadow-purple-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
