import { Link } from 'react-router-dom'
import ServicesGrid from '../components/ServicesGrid'

const process = [
  { step: '01', title: 'Discovery', desc: 'We start with deep-dive sessions to understand your business goals, users, and technical constraints.' },
  { step: '02', title: 'Architecture', desc: 'We design the system architecture, data models, and tech stack before writing a single line of code.' },
  { step: '03', title: 'Development', desc: 'Iterative sprints with regular demos so you stay in the loop and can course-correct early.' },
  { step: '04', title: 'Testing', desc: 'Comprehensive QA — unit tests, integration tests, and user acceptance testing before launch.' },
  { step: '05', title: 'Deployment', desc: 'Smooth launch with CI/CD pipelines, monitoring, and zero-downtime deployments.' },
  { step: '06', title: 'Support', desc: 'Post-launch maintenance, performance tuning, and iterative feature development.' },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Full-Cycle Digital<br />Product Development
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From front-end interfaces to cloud infrastructure — Pinecore Lab delivers
            complete software solutions that are built to scale.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How We Work</h2>
            <p className="section-subheading">
              A proven process that keeps projects on time, on budget, and aligned with your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="card relative">
                <div className="text-5xl font-extrabold text-gray-100 mb-2 leading-none select-none">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Technologies We Use</h2>
            <p className="section-subheading">Best-in-class tools for every layer of the stack.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
              { category: 'Backend', items: ['.NET 8', 'Node.js', 'Go', 'PostgreSQL', 'SQL Server'] },
              { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Kubernetes'] },
            ].map(({ category, items }) => (
              <div key={category} className="card">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider text-blue-600">
                  {category}
                </h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's talk about what you're building and how Pinecore Lab can help make it real.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
