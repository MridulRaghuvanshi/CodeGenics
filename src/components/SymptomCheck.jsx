// SymptomCheck.jsx
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
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={symptom}
          onChange={handleInputChange}
          placeholder="Describe your symptom..."
          className="w-[70%] rounded-lg"
        />
        <button type="submit" className="ml-[3rem] text-sm bg-green-700 py-1 px-2 rounded-2xl text-white cursor-pointer transition-all duration-300 hover:scale-105 ">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "4px 0",
            }}
          >
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
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
