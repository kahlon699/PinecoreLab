import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'

const techBadges = [
  'React', 'React Native', '.NET 8', 'Node.js', 'Flutter', 'AWS', 'Azure', 'Docker', 'TypeScript', 'PostgreSQL',
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

const whyUs = [
  {
    title: 'Clean Code, Every Time',
    desc: 'We follow SOLID principles and rigorous code review standards that keep your codebase maintainable long-term.',
  },
  {
    title: 'Transparent Communication',
    desc: 'Weekly updates, milestone tracking, and always-open channels — no surprises, ever.',
  },
  {
    title: 'Scalable Architecture',
    desc: 'We design systems that grow with your business, gracefully — from MVP to enterprise scale.',
  },
  {
    title: 'Cross-Platform Expertise',
    desc: 'Web, iOS, Android, and backend — one focused team covering your entire product stack.',
  },
]

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'MVP in weeks, not months',
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure by Design',
    desc: 'Security built in from day one',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First',
    desc: 'Optimized for every screen',
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud-Native',
    desc: '99.9% uptime guaranteed',
    color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/40',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Tech logos strip */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-7">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-medium hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              What We Build
            </span>
            <h2 className="section-heading text-center">Services We Offer</h2>
            <p className="section-subheading">
              From concept to deployment — full product lifecycle with engineering
              discipline and meticulous attention to detail.
            </p>
          </motion.div>

          <ServicesGrid preview />

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/services" className="btn-outline">
              See All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/40 px-4 sm:px-6 lg:px-8 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                Why Choose Us
              </span>
              <h2 className="section-heading">Why Pinecore Lab?</h2>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
                We combine startup agility with enterprise-grade engineering practices.
                Every line of code we ship is clean, tested, and built to last.
              </p>
              <ul className="space-y-5">
                {whyUs.map(({ title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white text-sm tracking-tight">{title}</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp(i * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="card border border-zinc-100 dark:border-zinc-800 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-zinc-900/40 transition-all duration-300 p-5"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                    {icon}
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm tracking-tight mb-1">{title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-12 md:p-16 text-center"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-400/20 blur-2xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to Build Something Great?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Tell us about your project — we'd love to help turn your idea
                into a polished, production-ready digital product.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  Contact Us Today
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-all duration-200 active:scale-95"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
