import pricingScreenshot from "../assets/pricing-screenshot.png";
import backgroundVideo from "../assets/dna.mp4"; // Your animated DNA video

export default function HeroSection() {
  return (
    <section className="relative w-full h-auto overflow-hidden py-12 px-4 mt-[5.1rem]">
      
      {/* 🔬 Background DNA video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 ml-[27rem]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧊 Overlay for readability */}
      /

      {/* 🚀 Main Hero Content */}
      <div className="relative z-20 container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* 📄 Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center">
            <div className="relative">
              <div className="text-sm font-medium bg-white/80 rounded-full px-4 py-1 border border-gray-200">
                Product of the Day
              </div>
              <div className="absolute -left-2 -right-2 -bottom-2 -top-2 border border-gray-200 rounded-full"></div>
              <div className="absolute -left-4 -right-4 -bottom-4 -top-4 border border-gray-200 rounded-full"></div>
            </div>
            <div className="ml-4 text-sm font-medium">1st</div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Empowering Healthcare with AI Intelligence
          </h1>

          <p className="text-lg text-gray-800 max-w-xl">
            Unlock the future of medical innovation with AI-driven tools designed to enhance clinical decision-making, streamline documentation, and predict health risks. From fast and accurate symptom checks to proactive disease management, our platform supports patients and providers in delivering better outcomes—faster, smarter, and with precision.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#4ade80] hover:bg-[#22c55e] text-white px-8 py-6 rounded-md font-medium">
              Buy Now
            </button>
            <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-8 py-6 rounded-md font-medium">
              Learn More
            </button>
          </div>

          <div className="flex items-center text-emerald-600 font-medium">
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
              className="h-5 w-5 mr-2"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
            <span>$350 off for the first 10 customers (2 left)</span>
          </div>
        </div>

        {/* 🖼️ Right side image */}
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {/* <img
              src={pricingScreenshot || "/placeholder.svg"}
              alt="Pricing screenshot"
              className="w-full"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
