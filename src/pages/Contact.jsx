import ContactForm from '../components/ContactForm'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@pinecorelab.com',
    href: 'mailto:contact@pinecorelab.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    label: 'Website',
    value: 'www.pinecorelab.com',
    href: '#',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 1–2 business days',
    href: null,
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a message and
              our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Pinecore Lab is a software and app development company. Whether you're
                  looking to build a new product, modernize existing systems, or explore
                  a technical partnership, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-800 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business info box */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">About Pinecore Lab</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Pinecore Lab is a registered software development company specializing
                  in web applications, mobile apps, SaaS platforms, and API systems. We
                  work with clients ranging from early-stage startups to established businesses
                  looking to modernize their technology stack.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
