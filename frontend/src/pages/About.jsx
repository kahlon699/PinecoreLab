import { Link } from 'react-router-dom'

const values = [
  {
    icon: '⚙️',
    title: 'Engineering Excellence',
    desc: 'We hold our code to the highest standards — readable, tested, and architected for the long term.',
  },
  {
    icon: '📈',
    title: 'Scalability First',
    desc: 'Every system we build is designed to handle growth gracefully, from 10 users to 10 million.',
  },
  {
    icon: '🤝',
    title: 'Partnership Mindset',
    desc: "We don't just deliver code — we become a trusted part of your team and genuinely care about your success.",
  },
  {
    icon: '💡',
    title: 'Continuous Innovation',
    desc: 'We stay current with modern tools and practices so our clients always benefit from the latest advancements.',
  },
]

const team = [
  { name: 'Engineering Team', role: 'Full-Stack Development', initials: 'ET' },
  { name: 'Mobile Division', role: 'iOS & Android Apps', initials: 'MD' },
  { name: 'Cloud & DevOps', role: 'Infrastructure & CI/CD', initials: 'CD' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              We Build Software<br />That Matters
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Pinecore Lab is a software and app development company dedicated to building
              modern, scalable digital products. Founded with a passion for clean engineering
              and thoughtful design, we partner with businesses to turn ideas into reliable software.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Mission</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our mission is to empower businesses through technology. We believe that
                great software should be accessible to companies of all sizes — not just
                those with Fortune 500 budgets.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                We specialize in web development, mobile applications, and SaaS platforms.
                Our team focuses on delivering production-ready software with a strong
                emphasis on performance, security, and maintainability.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Whether you're a startup launching your first product or an enterprise
                modernizing legacy systems, Pinecore Lab has the expertise to help you succeed.
              </p>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">What Defines Us</h3>
              <ul className="space-y-4">
                {[
                  'Software & App Development Company',
                  'Specializing in SaaS, Web, and Mobile',
                  'Full-cycle product development',
                  'Modern architecture practices',
                  'Transparent, collaborative process',
                  'Long-term client relationships',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading">
              The principles that guide how we work, communicate, and deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Teams</h2>
            <p className="section-subheading">
              Dedicated specialists working together to deliver exceptional products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map(({ name, role, initials }) => (
              <div key={name} className="card text-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {initials}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                <p className="text-gray-500 text-xs mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-gray-500 mb-8">
            We're always excited to hear about new projects. Reach out and let's discuss
            how Pinecore Lab can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
