import { motion } from "framer-motion";
import apiScreenshot from "../assets/api-screenshot.png";

export default function ApiSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-[#030303] text-center ">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-indigo-500/[0.05] blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute -left-20 top-40 w-64 h-64 rounded-full bg-blue-500/[0.03] blur-2xl" />
      <div className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-indigo-500/[0.03] blur-2xl" />

      <div className="container mx-auto max-w-3xl relative z-10 space-y-8 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            One-click API Integration
          </h2>

          <p className="text-lg text-white/60">
            With our API integration capability, seamlessly connect our app with all popular providers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
            Check out our SDK
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto relative z-10 mb-[9rem]"
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Code frame styling */}
          <div className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden">
            {/* Code editor header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-white/10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-white/60 text-sm">API Integration</div>
            </div>
            
            {/* Screenshot */}
            <img 
              src={apiScreenshot || "/placeholder.svg"} 
              alt="API integration screenshot" 
              className="w-full"
            />
          </div>
          
          {/* Reflection effect */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}