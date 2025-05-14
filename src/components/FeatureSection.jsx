import waveDark from "../assets/wave-dark.png"

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-20 px-4 bg-[#f5f3ff] mt-[10rem]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img src={waveDark || "/placeholder.svg"} alt="Abstract wave" className="w-full" />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Supercharge Your Efficiency!</h2>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="text-emerald-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Intelligent Assistance.</h3>
                <p className="text-gray-700 mt-1">
                  Receive personalized recommendations and insights tailored to your workflow.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="text-emerald-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Seamless Collaboration.</h3>
                <p className="text-gray-700 mt-1">Easily collaborate with team members and clients in real-time.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="text-emerald-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Advanced Customization.</h3>
                <p className="text-gray-700 mt-1">
                  Tailor your app to fit your unique requirements with extensive customization options.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="bg-[#a78bfa] hover:bg-[#8b5cf6] text-white px-6 py-3 rounded-md font-medium">
              Try now for free
            </button>
            <p className="text-gray-700">7 day free trial, no credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
