import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Engineering Excellence',
    desc: 'We hold our code to the highest standards — readable, tested, and architected for the long term.',
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Scalability First',
    desc: 'Every system we build is designed to handle growth gracefully, from 10 users to 10 million.',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Partnership Mindset',
    desc: "We don't just deliver code — we become a trusted part of your team and genuinely care about your success.",
    color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/50 dark:text-violet-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Continuous Innovation',
    desc: 'We stay current with modern tools so our clients always benefit from the latest advancements.',
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-400',
  },
]

const team = [
  {
    name: 'Engineering Team',
    role: 'Full-Stack Development',
    initials: 'ET',
    color: 'bg-blue-600',
    desc: 'React, .NET, Node.js, TypeScript',
  },
  {
    name: 'Mobile Division',
    role: 'iOS & Android Apps',
    initials: 'MD',
    color: 'bg-violet-600',
    desc: 'React Native, Flutter, Swift',
  },
  {
    name: 'Cloud & DevOps',
    role: 'Infrastructure & CI/CD',
    initials: 'CD',
    color: 'bg-emerald-600',
    desc: 'AWS, Azure, Docker, Kubernetes',
  },
]

const definedBy = [
  'Software & App Development Company',
  'Specializing in SaaS, Web, and Mobile',
  'Full-cycle product development',
  'Modern architecture practices',
  'Transparent, collaborative process',
  'Long-term client relationships',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-950/15 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl opacity-70" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-6">
              We Build Software
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                That Matters
              </span>
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Pinecore Lab is a software and app development company dedicated to building
              modern, scalable digital products. Founded with a passion for clean engineering
              and thoughtful design, we partner with businesses to turn ideas into reliable software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-100 dark:border-zinc-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                Our Mission
              </span>
              <h2 className="section-heading">Empowering Business Through Technology</h2>
              <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
                <p>
                  Our mission is to make great software accessible to companies of all sizes —
                  not just those with Fortune 500 budgets.
                </p>
                <p>
                  We specialize in web development, mobile applications, and SaaS platforms
                  with a strong emphasis on performance, security, and maintainability.
                </p>
                <p>
                  Whether you're a startup launching your first product or an enterprise
                  modernizing legacy systems, Pinecore Lab has the expertise to help you succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-indigo-400/20 blur-xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-bold mb-6 tracking-tight">What Defines Us</h3>
                <ul className="space-y-3.5">
                  {definedBy.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-blue-100">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </span>
            <h2 className="section-heading text-center">Core Principles</h2>
            <p className="section-subheading">
              The principles that guide how we work, communicate, and deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp(i * 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:shadow-zinc-900/40 transition-all duration-300 text-center p-7"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 mx-auto ${color}`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-100 dark:border-zinc-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              Our Teams
            </span>
            <h2 className="section-heading text-center">Dedicated Specialists</h2>
            <p className="section-subheading">
              Working together to deliver exceptional products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {team.map(({ name, role, initials, color, desc }, i) => (
              <motion.div
                key={name}
                variants={fadeUp(i * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card border border-zinc-100 dark:border-zinc-800 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-zinc-900/40 transition-all duration-300 text-center p-7"
              >
                <div className={`w-14 h-14 rounded-2xl ${color} text-white font-bold text-lg flex items-center justify-center mx-auto mb-4`}>
                  {initials}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm tracking-tight">{name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-1">{role}</p>
                <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-lg leading-relaxed">
              We're always excited to hear about new projects. Reach out and let's
              discuss how Pinecore Lab can help bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary px-8 py-3 text-base">
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
