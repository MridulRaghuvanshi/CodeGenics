// WhyChooseUs.jsx
import React,{useRef} from "react";
import { FaClock, FaRobot, FaStethoscope, FaShieldAlt, FaNotesMedical, FaMicroscope, FaHeartbeat } from "react-icons/fa";
import { motion, useInView  } from "framer-motion";


const features = [
  {
    icon: <FaStethoscope className="text-3xl text-sky-600 mx-auto" />,
    title: "Smart Symptom Assessment",
    description: "Analyze symptoms instantly with AI and guide users to the right care path.",
  },
  {
    icon: <FaMicroscope className="text-3xl text-sky-600 mx-auto" />,
    title: "Early Risk Prediction",
    description: "Catch potential health issues before they escalate using predictive analytics.",
  },
  {
    icon: <FaNotesMedical className="text-3xl text-sky-600 mx-auto" />,
    title: "Automated Documentation",
    description: "Save time with real-time clinical note generation and EHR-ready reports.",
  },
  {
    icon: <FaRobot className="text-3xl text-sky-600 mx-auto" />,
    title: "AI-Powered Accuracy",
    description: "Support diagnosis and reduce errors with AI-assisted clinical insights.",
  },
  {
    icon: <FaClock className="text-3xl text-sky-600 mx-auto" />,
    title: "Time & Cost Efficient",
    description: "Reduce unnecessary tests and appointments with intelligent triage.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-sky-600 mx-auto" />,
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
    <section ref={sectionRef} className="py-16 px-6 bg-gray-50 mt-[4rem]" id="why-us">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10">Empowering healthcare with intelligent tools for better outcomes.</p>

        <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 ease-out hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
