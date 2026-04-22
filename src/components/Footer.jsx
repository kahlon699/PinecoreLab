import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center  mb-4">
              <div className="flex items-center gap-1 mb-4">
  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
    <img src="/icons.svg" alt="logo" className="h-8 w-8" />
  </div>

  <span className="text-gray-200 text-2xl">
    Pinecore <span className="text-blue-600">Lab</span>
  </span>
</div>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Pinecore Lab is a software and app development company
              specializing in building modern, scalable digital products for
              businesses worldwide.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              <span className="text-gray-300 font-medium">Email:</span>{" "}
              <a
                href="mailto:contact@pinecorelab.com"
                className="hover:text-blue-400 transition-colors"
              >
                contact@pinecorelab.com
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>SaaS Platforms</li>
              <li>API & Backend Systems</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            &copy; {year} Pinecore Lab. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Software &amp; App Development Company
          </p>
        </div>
      </div>
    </footer>
  );
}
