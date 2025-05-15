import Logo from '../assets/CodeGenics.jpg'
export default function Footer() {
  return (
    <footer className="bg-[#f5f3ff] py-16 mt-[4rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="bg-purple-800 h-12 w-12 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h.01" />
                  <path d="M12 7h.01" />
                  <path d="M17 7h.01" />
                  <path d="M7 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M17 12h.01" />
                  <path d="M7 17h.01" />
                  <path d="M12 17h.01" />
                  <path d="M17 17h.01" />
                </svg>
              </div> */}
              <span className="text-2xl font-bold"><img src={Logo} className="w-60 h-20" alt="CodeGenics Logo" /></span>
            </div>

            <p className="text-gray-700 mb-4">
              Ship Next.js 15 apps with an MDX blog in minutes. TypeScript, Shadcn UI and all components you need to
              build for your app, website, product or blog. SEO optimized, responsive and performant.
            </p>

            <p className="text-sm text-gray-600">Copyright © CodeGenics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4">
            <div>
              <h3 className="font-medium text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Generating boilerplates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Writing posts with mdx
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Deploy to Vercel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Migrate blog from Ghost
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Free for Open Source
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About CodeGenics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Try app
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    All Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Become an affiliate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Landing Page Components
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Component Explorer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing Page Generator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Cron Expression Viewer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Create step-by-step guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 h-6 w-6 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">1</span>
              </div>
              <span className="text-sm font-medium">#1 Product of the Day</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-red-400 h-6 w-6 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">P</span>
              </div>
              <span className="text-sm font-medium">Developer Tools</span>
            </div>
          </div>

          <div className="text-sm text-gray-600">© 2025 • CodeGenics</div>
        </div>
      </div>
    </footer>
  )
}