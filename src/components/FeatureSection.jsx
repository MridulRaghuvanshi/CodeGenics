import { motion } from "framer-motion";
import waveDark from "../assets/wave-dark.png";

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-[#030303] min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-indigo-500/[0.05] blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute -left-20 top-40 w-64 h-64 rounded-full bg-blue-500/[0.03] blur-2xl" />
      <div className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-indigo-500/[0.03] blur-2xl" />

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
                  src={waveDark || "/placeholder.svg"} 
                  alt="Abstract wave" 
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
            Empower Your Healthcare Decisions!
            </h2>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="text-blue-400 mt-1">
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
                  <h3 className="text-xl font-semibold text-white">AI-Powered Insights</h3>
                  <p className="text-white/60 mt-1">
                  Get personalized health assessments and early warnings with our intelligent symptom checker and risk prediction tools.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="text-indigo-400 mt-1">
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
                  <h3 className="text-xl font-semibold text-white">Collaborate with Experts</h3>
                  <p className="text-white/60 mt-1">
                  Share reports and insights seamlessly with healthcare professionals for faster, data-driven consultations.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="text-blue-400 mt-1">
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
                  <h3 className="text-xl font-semibold text-white">Tailored to Your Needs</h3>
                  <p className="text-white/60 mt-1">
                  Customize clinical documentation and reports based on your practice or individual health goals.
                  </p>
                </div>
              </motion.div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}