import React, { useRef } from "react";
import { FaClock, FaRobot, FaStethoscope, FaShieldAlt, FaNotesMedical, FaMicroscope, FaHeartbeat } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: <FaStethoscope className="text-3xl text-blue-400 mx-auto" />,
    title: "Smart Symptom Assessment",
    description: "Analyze symptoms instantly with AI and guide users to the right care path.",
  },
  {
    icon: <FaMicroscope className="text-3xl text-indigo-400 mx-auto" />,
    title: "Early Risk Prediction",
    description: "Catch potential health issues before they escalate using predictive analytics.",
  },
  {
    icon: <FaNotesMedical className="text-3xl text-blue-400 mx-auto" />,
    title: "Automated Documentation",
    description: "Save time with real-time clinical note generation and EHR-ready reports.",
  },
  {
    icon: <FaRobot className="text-3xl text-indigo-400 mx-auto" />,
    title: "AI-Powered Accuracy",
    description: "Support diagnosis and reduce errors with AI-assisted clinical insights.",
  },
  {
    icon: <FaClock className="text-3xl text-blue-400 mx-auto" />,
    title: "Time & Cost Efficient",
    description: "Reduce unnecessary tests and appointments with intelligent triage.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-indigo-400 mx-auto" />,
    title: "Secure & Scalable",
    description: "HIPAA-compliant platform built for clinics, hospitals, and networks.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-6 bg-[#030303] relative overflow-hidden" 
      id="why-us"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-indigo-500/[0.03] blur-3xl" />
      
      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={isInView ? { opacity: 0.5, scale: 1, rotate: 15 } : {}}
        transition={{ duration: 1.8, delay: 0.2 }}
        className="absolute -left-20 top-20 w-64 h-64 rounded-full bg-blue-500/[0.03] blur-2xl"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={isInView ? { opacity: 0.5, scale: 1, rotate: -10 } : {}}
        transition={{ duration: 1.8, delay: 0.4 }}
        className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-indigo-500/[0.03] blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center relative z-10 mb-[5rem]"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us?</h2>
        <p className="text-white/60 mb-10">Empowering healthcare with intelligent tools for better outcomes.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              key={index}
              className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-white/[0.04]"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}