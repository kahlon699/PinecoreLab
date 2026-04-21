import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'

const trustedBadges = [
  'React', 'React Native', '.NET 8', 'Node.js', 'Flutter', 'AWS', 'Azure', 'Docker',
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trusted tech section */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-6 font-medium">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustedBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Build</h2>
            <p className="section-subheading">
              From concept to deployment — we handle the full product lifecycle with
              engineering discipline and attention to detail.
            </p>
          </div>
          <ServicesGrid preview />
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Why Pinecore Lab?</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We combine startup agility with enterprise-grade engineering practices.
                Every line of code we ship is clean, tested, and built to last.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Clean Code, Every Time', desc: 'We follow SOLID principles and code review standards that keep your codebase maintainable.' },
                  { title: 'Transparent Communication', desc: 'Weekly updates, milestone tracking, and always-open channels — no surprises.' },
                  { title: 'Scalable Architecture', desc: 'We design systems that grow with your business, from MVP to enterprise scale.' },
                  { title: 'Cross-Platform Expertise', desc: 'Web, iOS, Android, and backend — one team that covers your entire product.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚀', title: 'Fast Delivery', desc: 'MVP in weeks, not months' },
                { icon: '🔒', title: 'Secure by Design', desc: 'Security built in from day one' },
                { icon: '📱', title: 'Mobile-First', desc: 'Optimized for every screen' },
                { icon: '☁️', title: 'Cloud-Native', desc: 'Deployed for 99.9% uptime' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card text-center">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your project — we'd love to help turn your idea into a
            polished digital product.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
