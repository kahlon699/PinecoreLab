import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Software &amp; App Development
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Building Modern
            <br />
            <span className="text-green-400">Digital Products</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed mb-10">
            Pinecore Lab crafts high-quality web apps, mobile applications, and SaaS
            platforms — engineered for scale, built with clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-center text-sm"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-center text-sm"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Floating stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years of Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-blue-200 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
