import { motion } from "framer-motion";
import { cn } from "../lib/Cn";
import Navbar from "../components/Navbar";
// import "../components/"; // Reusing the same CSS for fonts

function FloatingElement({
  className,
  delay = 0,
  size = 200,
  rotate = 0,
  color = "bg-blue-500/10",
  shape = "rounded-full",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotate - 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotate,
      }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0",
            shape,
            color,
            "backdrop-blur-[1px] border border-white/10",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function TeamMember({ name, role, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 z-10" />
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <p className="text-white/50 text-sm">{role}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      <Navbar />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-indigo-500/[0.03] blur-3xl" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement
          delay={0.2}
          size={300}
          rotate={15}
          color="bg-blue-500/[0.08]"
          shape="rounded-3xl"
          className="left-[-5%] top-[20%]"
        />
        <FloatingElement
          delay={0.4}
          size={200}
          rotate={-10}
          color="bg-indigo-500/[0.08]"
          shape="rounded-full"
          className="right-[10%] top-[15%]"
        />
        <FloatingElement
          delay={0.6}
          size={150}
          rotate={25}
          color="bg-cyan-500/[0.08]"
          shape="rounded-lg"
          className="left-[15%] bottom-[10%]"
        />
        <FloatingElement
          delay={0.5}
          size={250}
          rotate={-20}
          color="bg-blue-500/[0.05]"
          shape="rounded-[30%]"
          className="right-[-5%] bottom-[20%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Section: Our Story */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
              <span className="text-sm text-white/60 tracking-wide">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Digital Healthcare</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-indigo-300 font-pacifico">
                Excellence
              </span>
            </h1>
            <p className="text-lg text-white/40 leading-relaxed font-light max-w-2xl mx-auto">
            At CodeGenics, we are revolutionizing the way healthcare is accessed and delivered. Our mission is to empower individuals and healthcare providers with intelligent, technology-driven solutions that improve health outcomes, streamline clinical workflows, and support informed decision-making.
            </p>
          </motion.div>

          {/* Section: Our Values */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 hover:bg-white/[0.04] transform transition-all duration-300 group-hover:scale-110">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-white/50">We constantly explore new technologies and approaches to deliver cutting-edge solutions that set our clients apart.</p>
              </div>
              
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 hover:bg-white/[0.04]  transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-white/50">We believe in the power of teamwork, working closely with our clients to understand their unique needs and goals.</p>
              </div>
              
              <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl p-6 hover:bg-white/[0.04]  transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-white/50">We are committed to delivering exceptional quality in everything we do, from design and development to customer service.</p>
              </div>
            </div>
          </motion.div>

          {/* Section: Our Team */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-white/40 max-w-2xl mx-auto">
                Our diverse team is committed to making quality healthcare more accessible, accurate, and efficient. By blending clinical knowledge with advanced artificial intelligence, we’re building tools that bridge the gap between patients and providers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15">
              <TeamMember 
                name="Mridul" 
                role="Web Developer" 
                image="https://drive.google.com/file/d/1Yh8hbzynqGIJ3YPLLgWslWN4aq0NTPnH/view?usp=sharing" 
                delay={0.3} 
              />
              <TeamMember 
                name="Shruti " 
                role="Web Developer" 
                image="" 
                delay={0.4} 
              />
              <TeamMember 
                name="Mudit " 
                role="" 
                image="https://drive.google.com/file/d/1Yh8hbzynqGIJ3YPLLgWslWN4aq0NTPnH/view?usp=sharing" 
                delay={0.5} 
              />
              <TeamMember 
                name="Shubhang " 
                role="Project Manager" 
                image="https://drive.google.com/file/d/1Yh8hbzynqGIJ3YPLLgWslWN4aq0NTPnH/view?usp=sharing" 
                delay={0.6} 
              />
            </div>
          </motion.div>

          {/* Section: Our Approach */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Approach</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                    <p className="text-white/50">We begin by deeply understanding the needs of patients, healthcare providers, and stakeholders. 
                    Through research, data analysis, and expert consultation, we identify pain points, clinical challenges, and opportunities for innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-400 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
                    <p className="text-white/50">Our team transforms insights into intuitive, user-friendly designs. We focus on creating seamless experiences for both patients and clinicians—prioritizing accessibility, clarity, and clinical accuracy at every touchpoint.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                    <p className="text-white/50">Using the latest technologies and AI frameworks, we develop secure, scalable, and interoperable solutions. Our code is clean, compliant, and built for performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Delivery & Support</h3>
                    <p className="text-white/50">We ensure smooth, secure rollout with minimal disruption.
                    We provide ongoing support, updates, and optimization to keep your systems running smoothly and evolving with the healthcare landscape.</p>
                  </div>
                </div>
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