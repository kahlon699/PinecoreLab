import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@pinecorelab.com',
    href: 'mailto:contact@pinecorelab.com',
    color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/50 dark:text-sky-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: 'Website',
    value: 'www.pinecorelab.com',
    href: '#',
    color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/50 dark:text-violet-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 1–2 business days',
    href: null,
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400',
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 dark:bg-indigo-950/15 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            animate="show"
          >
            <span className="inline-block text-xs font-semibold text-sky-500 dark:text-sky-400 uppercase tracking-widest mb-4">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-5">
              Let's Start a
              <br />
              <span className="bg-gradient-to-r from-sky-500 to-sky-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a message
              and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/40 border-t border-zinc-100 dark:border-zinc-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left: info */}
            <motion.div
              variants={fadeUp()}
              initial="hidden"
              animate="show"
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Whether you're looking to build a new product, modernize existing systems,
                  or explore a technical partnership — we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, href, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-zinc-800 dark:text-zinc-200 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6">
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm mb-3 tracking-tight">
                  About Pinecore Lab
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                  Pinecore Lab specializes in web applications, mobile apps, SaaS platforms,
                  and API systems. We work with clients ranging from early-stage startups
                  to established businesses modernizing their technology stack.
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="show"
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-8 shadow-sm shadow-zinc-900/3">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
