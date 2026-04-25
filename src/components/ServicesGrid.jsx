import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Fast, responsive, and SEO-optimized websites and web applications using React, Next.js, and .NET.',
    iconBg: 'bg-sky-50 dark:bg-sky-950/50 text-sky-500 dark:text-sky-400',
    accent: 'group-hover:border-sky-200 dark:group-hover:border-sky-900',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android using React Native and Flutter, with seamless UX.',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400',
    accent: 'group-hover:border-emerald-200 dark:group-hover:border-emerald-900',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'SaaS Platforms',
    description: 'End-to-end SaaS development — architecture, multi-tenancy, billing integration, and deployment pipelines.',
    iconBg: 'bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400',
    accent: 'group-hover:border-violet-200 dark:group-hover:border-violet-900',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'API & Backend Systems',
    description: 'Scalable REST and GraphQL APIs with .NET, Node.js, or Go. Resilient data models and integration layers.',
    iconBg: 'bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400',
    accent: 'group-hover:border-orange-200 dark:group-hover:border-orange-900',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Deployment',
    description: 'AWS, Azure, or GCP infrastructure — Docker containerization, CI/CD pipelines, and 99.9% uptime SLAs.',
    iconBg: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400',
    accent: 'group-hover:border-cyan-200 dark:group-hover:border-cyan-900',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Code Review & Consulting',
    description: 'Technical audits, architecture reviews, and hands-on consulting to help your team build better and faster.',
    iconBg: 'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400',
    accent: 'group-hover:border-rose-200 dark:group-hover:border-rose-900',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ServicesGrid({ preview = false }) {
  const displayed = preview ? services.slice(0, 3) : services

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {displayed.map((s, i) => (
        <motion.div
          key={s.title}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`group card border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/8 dark:hover:shadow-zinc-900/50 cursor-default ${s.accent}`}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${s.iconBg}`}>
            {s.icon}
          </div>
          <h3 className="font-semibold text-zinc-900 dark:text-white text-base mb-2 tracking-tight">{s.title}</h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{s.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
