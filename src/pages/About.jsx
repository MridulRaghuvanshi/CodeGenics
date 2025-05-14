import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import teamImage from "../assets/team-image.jpeg"
import officeImage from "../assets/office-image.jpg"
import { PlayCircle } from "../components/Icons"

export default function About() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      {/* Hero Section with dark background */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to transform how businesses operate through the power of artificial intelligence.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg"
              >
                Our Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white" ref={ref1}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={inView1 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Emerald AI, we believe that artificial intelligence should be accessible to everyone. Our mission is
                to democratize AI technology and make it work for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We started in 2020 with a small team of passionate engineers and AI specialists who wanted to bridge the
                gap between complex AI capabilities and everyday business needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                  Innovation
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Accessibility
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Excellence</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView1 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={teamImage || "/placeholder.svg"} alt="Our team" className="w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-2xl font-bold">Our Amazing Team</h3>
                    <p className="text-white/80">Passionate about creating the future of AI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white" ref={ref2}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-purple-200">
              These principles guide everything we do, from product development to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
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
                  className="h-8 w-8 text-white"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-purple-200">
                We constantly push the boundaries of what's possible with AI, developing cutting-edge solutions that
                solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
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
                  className="h-8 w-8 text-white"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Focus</h3>
              <p className="text-purple-200">
                We put our customers at the center of everything we do, ensuring our products solve their specific
                challenges and exceed their expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
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
                  className="h-8 w-8 text-white"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-purple-200">
                We operate with transparency and honesty, building trust with our customers, partners, and within our
                team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Use Our Website */}
      <section className="py-20 bg-gray-50" ref={ref3}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView3 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">How to Use Our Website</h2>
            <p className="text-lg text-gray-700">
              Watch our short demo video to learn how to get the most out of Emerald AI's features.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView3 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <PlayCircle className="h-20 w-20 text-white opacity-80 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">Watch Demo Video</p>
                </div>
              </div>
              <img
                src={officeImage || "/placeholder.svg"}
                alt="Office environment"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have time for the video? Check out our{" "}
                <a href="#" className="text-emerald-600 font-medium hover:underline">
                  quick start guide
                </a>{" "}
                instead.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Visit Our Office</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're headquartered in San Francisco with offices in New York, London, and Singapore. We'd love to meet
                you in person!
              </p>
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2">San Francisco HQ</h3>
                <p className="text-gray-700">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94107
                  <br />
                  United States
                </p>
                <button className="mt-4 text-emerald-600 font-medium hover:underline flex items-center">
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
                    className="h-4 w-4 mr-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-emerald-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-emerald-600">50+</span>
                </div>
                <div className="aspect-square bg-purple-100 rounded-xl p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-purple-800 mb-2">Team Members</h3>
                  <p className="text-purple-700">Passionate experts from around the world</p>
                </div>
                <div className="aspect-square bg-blue-100 rounded-xl p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-blue-800 mb-2">Founded</h3>
                  <p className="text-blue-700">Established in 2020 with a vision for AI-powered future</p>
                </div>
                <div className="aspect-square bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-amber-600">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}