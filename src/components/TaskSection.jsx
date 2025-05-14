import wavePurple from "../assets/wave-purple.png"

export default function TaskSection() {
  return (
    <section className="container mx-auto py-20 px-4 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img src={wavePurple || "/placeholder.svg"} alt="Purple wave" className="w-full" />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Smart Task Prioritization</h2>

          <p className="text-lg text-gray-700">
            Our AI-powered task prioritization feature automatically organizes your to-do list based on deadlines,
            importance, and your work patterns, ensuring you focus on the most critical tasks first.
          </p>

          <div className="space-y-3">
            <button className="bg-[#4ade80] hover:bg-[#22c55e] text-white px-6 py-3 rounded-md font-medium">
              Try now for free
            </button>
            <p className="text-gray-700">First month is on us.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-4xl font-bold">4.9/5 stars</h3>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium">99+</span>
            <div className="ml-2 flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#facc15"
                  stroke="#facc15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">from 99+ happy users</span>
          </div>
        </div>
      </div>
    </section>
  )
}
