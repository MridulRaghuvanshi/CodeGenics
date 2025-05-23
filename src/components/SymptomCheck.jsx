import React, { useState, useRef, useEffect } from "react";

export default function SymptomCheck({ onReset }) {
  const [symptom, setSymptom] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => setSymptom(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symptom.trim()) return;
    const userMsg = { sender: "user", text: symptom };
    const aiMsg = { sender: "ai", text: getAIResponse(symptom) };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setSymptom("");
  };

  const handleReset = () => {
    setMessages([]);
    setSymptom("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (onReset) {
        onReset(() => handleReset);
    }
  }, [onReset]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={symptom}
          onChange={handleInputChange}
          placeholder="Describe your symptom..."
          className="w-[70%] bg-white/[0.03] border border-white/10 text-white placeholder-white/40 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
        />
        <button 
          type="submit" 
          className="ml-[2.5rem] text-sm bg-gradient-to-r from-blue-500 to-indigo-600 py-1 px-3 rounded-2xl text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 shadow-sm"
        >
          Submit
        </button>
      </form>

      <div className="mt-5 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div 
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === "user" 
                  ? "bg-blue-500/30 text-white rounded-tr-none" 
                  : "bg-indigo-500/20 text-white/90 rounded-tl-none"
              }`}
            >
              <div className="text-xs opacity-70 mb-1">
                {msg.sender === "user" ? "You" : "AI"}
              </div>
              <div>{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dummy response generator (or import from utils)
function getAIResponse(symptom) {
  const lower = symptom.toLowerCase();
  const observations = [
    { keywords: ["fever", "temperature", "hot"], response: "A fever may indicate an infection. Stay hydrated..." },
    { keywords: ["cough", "throat", "sore"], response: "A cough and sore throat could be signs of a cold..." },
    { keywords: ["headache", "migraine"], response: "Headaches can be caused by stress or dehydration..." },
    { keywords: ["chest pain", "breath"], response: "Chest pain or breathing issues can be serious..." },
    { keywords: ["stomach", "nausea", "vomit"], response: "Stomach issues may be from infection or indigestion..." },
  ];
  for (const obs of observations) {
    if (obs.keywords.some(k => lower.includes(k))) return obs.response;
  }
  return "Your symptoms are noted. Please consult a healthcare professional.";
}