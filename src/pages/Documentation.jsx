
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import backgroundVideo from "../assets/dna.mp4"
import { Mic, MicOff, FileText, Check, Clock, RotateCcw } from "../components/Icons"
import Navbar from "../components/Navbar"


export default function Documentation() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [transcription, setTranscription] = useState("")
  const [clinicalNotes, setClinicalNotes] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState("record") // "record" or "notes"
  const timerRef = useRef(null)

  // Sample transcription text for demo purposes
  const sampleTranscription =
    "Patient presents with persistent cough for the past two weeks, accompanied by mild fever in the evenings. No shortness of breath or chest pain. Patient reports having been in contact with someone who tested positive for influenza last week. Vaccination history is up to date. No known allergies to medications."

  // Sample clinical notes for demo purposes
  const sampleClinicalNotes = {
    subjective:
      "Patient reports persistent cough for 2 weeks with mild evening fevers. No dyspnea or chest pain. Recent exposure to influenza-positive contact. Vaccination status current. NKDA.",
    objective:
      "Vital Signs: Temp 99.8°F, HR 82, BP 124/78, RR 16, SpO2 98% on RA\nPhysical Exam: Oropharynx mildly erythematous. Lungs clear to auscultation bilaterally. No rhonchi or wheezes.",
    assessment:
      "1. Acute upper respiratory infection, likely viral in etiology\n2. Rule out influenza given recent exposure",
    plan: "1. Symptomatic treatment with acetaminophen for fever\n2. Increase fluid intake\n3. Influenza testing\n4. Follow up in 5-7 days if symptoms persist\n5. Return sooner if develops shortness of breath or worsening symptoms",
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleStartRecording = () => {
    setIsRecording(true)
    setRecordingTime(0)
    setTranscription("")
    setClinicalNotes(null)

    // Start timer
    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1)
    }, 1000)

    // Simulate receiving transcription after 3 seconds
    setTimeout(() => {
      setTranscription(sampleTranscription)
    }, 3000)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleGenerateNotes = () => {
    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      setClinicalNotes(sampleClinicalNotes)
      setIsProcessing(false)
      setActiveTab("notes")
    }, 2000)
  }

  const handleReset = () => {
    setIsRecording(false)
    setRecordingTime(0)
    setTranscription("")
    setClinicalNotes(null)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 min-h-screen bg-white relative"
    >
      {/* Background */}
      <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 ml-[27rem]"
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

      <div className="container mx-auto px-8 py-24 relative z-10">
      <Navbar />
        <div className="flex flex-col lg:flex-row">
          {/* Left sidebar navigation */}
          {/* <div className="lg:w-1/6 mb-8 lg:mb-0">
            <div className="flex flex-col space-y-6">
              <div className="text-gray-700 text-sm">Intro</div>
              <div className="text-gray-700 text-sm">Expertise</div>
              <div className="text-gray-700 text-sm">Technology</div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                <div className="text-gray-900 text-sm font-medium">Documentation</div>
              </div>
              <div className="text-gray-400 text-sm">Services</div>
              <div className="text-gray-400 text-sm">Contacts</div>
            </div>
          </div> */}

          {/* Main content */}
          <div className="lg:w-5/6 lg:pl-8 flex items-center justify-center">
            <div className="max-w-4xl">
              <div className="uppercase text-sm font-medium tracking-wider mb-6 text-gray-900">
                AUTOMATED CLINICAL DOCUMENTATION
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Voice-powered
                <br />
                clinical notes
              </h1>

              <p className="text-base mb-10 text-gray-700">
                Streamline your workflow with AI-powered documentation. Simply speak and let our
                <br />
                advanced NLP technology generate accurate clinical notes in seconds.
              </p>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  className={`pb-4 px-6 font-medium text-sm ${activeTab === "record" ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-500"}`}
                  onClick={() => setActiveTab("record")}
                >
                  Voice Recording
                </button>
                <button
                  className={`pb-4 px-6 font-medium text-sm ${activeTab === "notes" ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-500"}`}
                  onClick={() => setActiveTab("notes")}
                  disabled={!clinicalNotes}
                >
                  Clinical Notes
                </button>
              </div>

              {/* Recording Interface */}
              {activeTab === "record" && (
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <div className="flex flex-col items-center mb-8">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${isRecording ? "bg-red-50 animate-pulse" : "bg-gray-100"}`}
                    >
                      <button
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-purple-600 hover:bg-purple-700"}`}
                        onClick={isRecording ? handleStopRecording : handleStartRecording}
                      >
                        {isRecording ? (
                          <MicOff className="h-6 w-6 text-white" />
                        ) : (
                          <Mic className="h-6 w-6 text-white" />
                        )}
                      </button>
                    </div>
                    <div className="text-center">
                      {isRecording ? (
                        <div className="text-red-500 font-medium flex items-center">
                          <span className="mr-2">Recording</span>
                          <Clock className="h-4 w-4" />
                          <span className="ml-1">{formatTime(recordingTime)}</span>
                        </div>
                      ) : (
                        <div className="text-gray-500 font-medium">Click to start recording</div>
                      )}
                    </div>
                  </div>

                  {/* Transcription */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-900">Transcription</h3>
                      {transcription && (
                        <button
                          className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
                          onClick={handleReset}
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 min-h-[120px]">
                      {transcription ? (
                        <p className="text-gray-700">{transcription}</p>
                      ) : (
                        <p className="text-gray-400 italic">Transcription will appear here...</p>
                      )}
                    </div>
                  </div>

                  {/* Generate Notes Button */}
                  {transcription && !clinicalNotes && (
                    <div className="flex justify-center">
                      <button
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleGenerateNotes}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FileText className="h-5 w-5 mr-2" />
                            Generate Clinical Notes
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Clinical Notes */}
              {activeTab === "notes" && clinicalNotes && (
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium text-gray-900 text-lg">Generated Clinical Notes</h3>
                    <div className="flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">AI-Generated</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium uppercase text-gray-500 mb-2">Subjective</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-700">{clinicalNotes.subjective}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium uppercase text-gray-500 mb-2">Objective</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-700 whitespace-pre-line">{clinicalNotes.objective}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium uppercase text-gray-500 mb-2">Assessment</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-700 whitespace-pre-line">{clinicalNotes.assessment}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium uppercase text-gray-500 mb-2">Plan</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-700 whitespace-pre-line">{clinicalNotes.plan}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                      onClick={() => setActiveTab("record")}
                    >
                      Back to Recording
                    </button>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium">
                      Save to Patient Record
                    </button>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-2">HIPAA Compliant</h3>
                  <p className="text-gray-600 text-sm">
                    All data is encrypted and processed in compliance with healthcare privacy regulations.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-2">Real-time Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Advanced NLP algorithms convert speech to structured clinical documentation in seconds.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-2">EHR Integration</h3>
                  <p className="text-gray-600 text-sm">
                    Seamlessly integrates with major electronic health record systems for efficient workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <button className="bg-black text-white rounded-full px-4 py-2 flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Scroll for more
        </button>
      </div>
    </motion.div>
  )
}
