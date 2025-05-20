import { motion } from "framer-motion";
import wavePurple from "../assets/wave-purple.png";

export default function TaskSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-[#030303] mt-[7rem]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-indigo-500/[0.05] blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute -right-20 top-40 w-64 h-64 rounded-full bg-blue-500/[0.03] blur-2xl" />
      <div className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-indigo-500/[0.03] blur-2xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image frame */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl overflow-hidden p-1">
                <img 
                  src={wavePurple || "/placeholder.svg"} 
                  alt="Purple wave" 
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* Reflection effect */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Smart Task Prioritization
            </h2>

            <p className="text-lg text-white/70">
              Our AI-powered task prioritization feature automatically organizes your to-do list based on deadlines,
              importance, and your work patterns, ensuring you focus on the most critical tasks first.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
                Try now for free
              </button>
              <p className="text-white/60">First month is on us.</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6"
        >
          <div>
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">4.9/5 stars</h3>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-[#030303]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 border-2 border-[#030303]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-2 border-[#030303]"></div>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-white">99+</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-white/60">from 99+ happy users</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}