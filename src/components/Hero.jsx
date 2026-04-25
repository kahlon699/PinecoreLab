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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-zinc-950 pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-50 dark:bg-blue-950/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-50 dark:bg-indigo-950/20 blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-50 dark:bg-violet-950/10 blur-3xl opacity-30" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #52525b 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 mb-8 tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.06] mb-6"
          >
            Build Modern
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Digital Products
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10"
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
            <Link to="/contact" className="btn-primary text-base px-7 py-3">
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/services" className="btn-outline text-base px-7 py-3">
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
                  <div className="hidden sm:block w-px h-8 bg-zinc-200 dark:bg-zinc-700" />
                )}
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{value}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
