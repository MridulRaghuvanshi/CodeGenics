"use client"
import { motion } from "motion/react"
import { LampContainer } from "../components/ui/Lamp"
import { Button } from "../components/ui/Button"

export default function HeroSection() {
  return (
    <div className="w-full mt-[6rem]">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="mt-8 bg-gradient-to-br from-white to-slate-400 py-2 bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent md:text-7xl">
            Your Vision, <br /> Our Innovation
          </h1>

          <p className="text-slate-300 text-center max-w-lg text-lg md:text-xl">
            Create stunning digital experiences with our cutting-edge solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-300">
              Learn More
            </Button>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  )
}
