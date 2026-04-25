import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServicesGrid from '../components/ServicesGrid'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Deep-dive sessions to understand your business goals, users, and technical constraints.',
    color: 'text-sky-500 dark:text-sky-400',
  },
  {
    step: '02',
    title: 'Architecture',
    desc: 'System architecture, data models, and tech stack designed before writing a single line of code.',
    color: 'text-violet-600 dark:text-violet-400',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Iterative sprints with regular demos so you stay in the loop and can course-correct early.',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    step: '04',
    title: 'Testing',
    desc: 'Comprehensive QA — unit tests, integration tests, and user acceptance testing before launch.',
    color: 'text-amber-600 dark:text-amber-400',
  },
  {
    step: '05',
    title: 'Deployment',
    desc: 'Smooth launch with CI/CD pipelines, monitoring, and zero-downtime deployments.',
    color: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    step: '06',
    title: 'Support',
    desc: 'Post-launch maintenance, performance tuning, and iterative feature development.',
    color: 'text-rose-600 dark:text-rose-400',
  },
]

const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50 dark:text-sky-400',
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/50 dark:text-violet-400',
  },
  {
    category: 'Backend',
    items: ['.NET 8', 'Node.js', 'Go', 'PostgreSQL', 'SQL Server'],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400',
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Kubernetes'],
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/50 dark:text-cyan-400',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-50 dark:bg-sky-950/15 rounded-full -translate-y-1/2 blur-3xl opacity-70" />
        </div>
        <div className="max-w-7xl mx-auto relative text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="show"
          >
            <span className="inline-block text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-4">
              Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-6">
              Full-Cycle Digital
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-clip-text text-transparent">
                Product Development
              </span>
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              From front-end interfaces to cloud infrastructure — complete software
              solutions that are built to scale and designed to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-100 dark:border-zinc-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServicesGrid />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-3">
              Our Process
            </span>
            <h2 className="section-heading text-center">How We Work</h2>
            <p className="section-subheading">
              A proven process that keeps projects on time, on budget, and aligned with your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map(({ step, title, desc, color }, i) => (
              <motion.div
                key={step}
                variants={fadeUp(i * 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card border border-zinc-100 dark:border-zinc-800 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-zinc-900/40 transition-all duration-300 p-7"
              >
                <div className={`text-4xl font-extrabold mb-3 leading-none ${color} opacity-25 select-none`}>
                  {step}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-base mb-2 tracking-tight">{title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-100 dark:border-zinc-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-3">
              Tech Stack
            </span>
            <h2 className="section-heading text-center">Technologies We Use</h2>
            <p className="section-subheading">Best-in-class tools for every layer of the stack.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map(({ category, items, icon, color }, i) => (
              <motion.div
                key={category}
                variants={fadeUp(i * 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card border border-zinc-100 dark:border-zinc-800 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-zinc-900/40 transition-all duration-300 p-6"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm tracking-tight mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500 via-sky-500 to-sky-600 p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-sky-400/20 blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-sky-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Let's talk about what you're building and how Pinecore Lab can help make it real.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-sky-900/20 active:scale-95"
              >
                Start a Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
