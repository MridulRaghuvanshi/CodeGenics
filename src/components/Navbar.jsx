
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"; // ✅ Vite-compatible
import logo from "../assets/circle.png"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"
import Contact from "../pages/Contact"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "MediScan", href: "/symptoms" },
    { name: "Clinical Docs", href: "/docs" },
    { name: "Contact", href: "/contacts" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-[#030303]/80 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Empty div to balance the flex layout */}
          <div className="w-[120px]"></div>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white/70 hover:text-white ransition-all duration-300 ease-out hover:scale-105 text-sm font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white/70 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo on the right */}
          <div className="flex items-center justify-end w-[120px]">
            <div className="relative h-10 w-10">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-full w-full object-cover rounded-full cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}