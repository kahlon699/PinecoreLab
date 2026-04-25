import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-sky-700 pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-white/10 blur-2xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-white/20 text-white border border-white/30 mb-8 tracking-wide uppercase backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Software &amp; App Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.06] mb-6"
          >
            We're The Best
            <br />
            <span className="text-white/80">
              Tech Leading Company
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl text-sky-50 max-w-2xl leading-relaxed mb-10"
          >
            Pinecore Lab crafts high-quality web apps, mobile applications, and SaaS
            platforms — engineered for scale, built with precision.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-sky-600 font-semibold text-base px-7 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-sky-900/20 active:scale-95"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm active:scale-95"
            >
              View Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-10 gap-y-6"
          >
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-8 bg-white/30" />
                )}
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
                  <div className="text-sm text-sky-100 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
