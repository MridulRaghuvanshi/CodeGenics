import apiScreenshot from "../assets/api-screenshot.png"

export default function ApiSection() {
  return (
    <section className="container mx-auto py-20 px-4 bg-[#e6f7f1] text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">One-click API Integration</h2>

        <p className="text-lg text-gray-700">
          With our API integration capability, seamlessly connect our app with all popular providers.
        </p>

        <div className="flex justify-center">
          <button className="border border-emerald-200 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-md font-medium">
            Check out our SDK
          </button>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img src={apiScreenshot || "/placeholder.svg"} alt="API integration screenshot" className="w-full" />
        </div>
      </div>
    </section>
  )
}
