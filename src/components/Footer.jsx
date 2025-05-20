

import Logo from '../assets/CodeGenics.jpg'

export default function Footer() {
  return (
    <footer className="bg-[#030303] py-16 mt-[4rem] relative overflow-hidden">
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
              Ship Next.js 15 apps with an MDX blog in minutes. TypeScript, Shadcn UI and all components you need to
              build for your app, website, product or blog. SEO optimized, responsive and performant.
            </p>

            <p className="text-sm text-white/40">Copyright © CodeGenics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4">
            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Generating boilerplates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Writing posts with mdx
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Deploy to Vercel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Migrate blog from Ghost
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Free for Open Source
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
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    About CodeGenics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Try app
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Release Notes
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
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Become an affiliate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-white">Tools</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Landing Page Components
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Component Explorer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Pricing Page Generator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Cron Expression Viewer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Create step-by-step guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-blue-400 transition-colors duration-200">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-6 w-6 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <span className="text-sm font-medium text-white/80">#1 Product of the Day</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-6 w-6 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">P</span>
              </div>
              <span className="text-sm font-medium text-white/80">Developer Tools</span>
            </div>
          </div>

          <div className="text-sm text-white/40">© 2025 • CodeGenics</div>
        </div>
      </div>
    </footer>
  )
}