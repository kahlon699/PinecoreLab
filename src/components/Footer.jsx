import { Link } from 'react-router-dom'

const services = [
  'Web Development',
  'Mobile App Development',
  'SaaS Platforms',
  'API & Backend Systems',
  'Cloud Deployment',
]

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white transition-transform duration-200 group-hover:scale-105">
                <img src="/icons.svg" alt="Pinecore Lab" className="h-6 w-6" />
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">
                Pinecore <span className="text-blue-500">Lab</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed mb-6">
              A software and app development company building modern, scalable
              digital products for businesses worldwide.
            </p>
            <a
              href="mailto:contact@pinecorelab.com"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-150 group"
            >
              <svg className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@pinecorelab.com
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/80 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-zinc-600">
            &copy; {year} Pinecore Lab. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Software &amp; App Development Company
          </p>
        </div>
      </div>
    </footer>
  )
}
