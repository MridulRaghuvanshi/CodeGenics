import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/Cn";
import Navbar from "../components/Navbar";
import axios from 'axios';
// import "./HeroGeometric.css"; // Reusing the same CSS for fonts

function WavePattern({ className }) {

  return (
    <div className={cn("absolute z-0 opacity-20", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1080 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#gradient1)"
          animate={{
            d: [
              "M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,240C672,213,768,171,864,181.3C960,192,1056,256,1152,277.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,128C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PulsingDot({ delay = 0, x, y, size = 6, color = "bg-blue-400" }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.div
        className={`w-${size} h-${size} ${color} rounded-full`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const res = await axios.post("http://127.0.0.1:4000/api/v1/reach/contact", formState,{ withCredentials: true });
  
      if (res.status === 200) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
  
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Failed to send message: " + res.data.message);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please try again.");
    }
  
    setIsSubmitting(false);
  };
  

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      onSubmit={handleSubmit}
      className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 md:p-8"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
          <p className="text-white/50">Thank you for reaching out. We'll get back to you shortly.</p>
        </motion.div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white/70 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                placeholder="Enter Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-white/70 text-sm mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              placeholder="How can we help you?"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-white/70 text-sm mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 relative cursor-pointer overflow-hidden group ${
              isSubmitting ? "bg-blue-500/50 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
            }`}
          >
            <span className="relative z-10 text-white">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            {!isSubmitting && (
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300"></span>
            )}
          </button>
        </>
      )}
    </motion.form>
  );
}

function ContactInfo({ icon, title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-4"
    >
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <div className="text-white/50">{children}</div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  // Generate random positions for pulsing dots
  const dots = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.floor(Math.random() * 4),
    color: i % 3 === 0 ? "bg-blue-400/70" : i % 3 === 1 ? "bg-indigo-400/70" : "bg-cyan-400/70",
    delay: i * 0.1,
  }));

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      <Navbar />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.02] blur-3xl" />
      
      <WavePattern className="bottom-0 left-0 right-0 h-[50vh]" />
      
      {/* Pulsing dots */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot) => (
          <PulsingDot
            key={dot.id}
            x={dot.x}
            y={dot.y}
            size={dot.size}
            color={dot.color}
            delay={dot.delay}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <span className="text-sm text-white/60 tracking-wide">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Let's Start a</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-indigo-300 font-pacifico">
                Conversation
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed font-light max-w-2xl mx-auto">
            We’re here to help! Whether you have questions, feedback, or inquiries about our services, feel free to reach out. 
            Fill out the form below and we’ll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Contact content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Contact form - 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact info - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>}
                    title="Email Us"
                    delay={0.3}
                  >
                    <a href="mailto:hello@kokonutui.com" className="hover:text-blue-400 transition-colors duration-300">codegenics4@gmail.com
                    </a>
                  </ContactInfo>
                  
                  <ContactInfo 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>}
                    title="Call Us"
                    delay={0.4}
                  >
                    <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors duration-300">+1 (234) 567-890</a>
                  </ContactInfo>
                  
                  <ContactInfo 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>}
                    title="Visit Us"
                    delay={0.5}
                  >
                    <p>Cyfuture India Pvt Ltd,Plot No. 126 N <br />SEZ,Phase-2, Block A<br/>Noida, Uttar Pradesh, India</p>
                  </ContactInfo>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-white mb-4">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/70">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/70">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/70">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/70">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Map section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-1 overflow-hidden">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.232208517855!2d77.37838390504448!3d28.53551615221981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5115d06e6a3%3A0x6633e20a93c5f12e!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716196721987!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}