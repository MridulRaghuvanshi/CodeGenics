

import Logo from '../assets/CodeGenicswhite.png'

export default function Footer() {
  return (
    <footer className="bg-[#030303] py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-indigo-500/[0.03] blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute left-[10%] bottom-[20%] w-64 h-64 rounded-full bg-blue-500/[0.02] blur-2xl" />
      <div className="absolute right-[5%] top-[10%] w-80 h-80 rounded-full bg-indigo-500/[0.02] blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold">
                <img src={Logo || "/placeholder.svg"} className="w-60 h-20" alt="CodeGenics Logo" />
              </span>
            </div>

            <p className="text-white/60 mb-4">
            At CodeGenics, we follow a patient-centered, innovation-driven approach to build reliable, intelligent healthcare solutions.
             Each phase of our process is carefully crafted to ensure we meet clinical needs with precision, efficiency, and long-term value.
            </p>

            <p className="text-sm text-white/40">Copyright © CodeGenics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4">
            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Clinical Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Risk Prediction Tool
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Health Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                      MediScan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Medical Report Generator
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="about" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  User Guide
                  </a>
                </li>
                <li>
                  <a href="contacts" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Meet the Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    All Features
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Partners & Affiliates</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Collaborate With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Research Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Become a Medical Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                  Press & Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          

          <div className="text-sm text-white/40">© 2025 • CodeGenics</div>
        </div>
      </div>
    </footer>
  )
}