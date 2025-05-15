import React, { useState } from "react";

const aiObservations = [
  {
    keywords: ["fever", "temperature", "hot"],
    response: "A fever may indicate an infection. Stay hydrated and monitor your temperature. If it persists, consult a doctor."
  },
  {
    keywords: ["cough", "throat", "sore"],
    response: "A cough and sore throat could be signs of a cold or flu. Rest and drink warm fluids. Seek care if symptoms worsen."
  },
  {
    keywords: ["headache", "migraine"],
    response: "Headaches can be caused by stress, dehydration, or other factors. Rest and drink water. If severe, seek medical advice."
  },
  {
    keywords: ["chest pain", "breath", "breathing"],
    response: "Chest pain or difficulty breathing can be serious. Please seek immediate medical attention."
  },
  {
    keywords: ["stomach", "nausea", "vomit"],
    response: "Stomach issues may be due to infection or indigestion. Stay hydrated and eat light foods."
  }
];

function getAIResponse(symptom) {
  const lower = symptom.toLowerCase();
  for (const obs of aiObservations) {
    if (obs.keywords.some(k => lower.includes(k))) {
      return obs.response;
    }
  }
  return "Your symptoms are noted. For an accurate diagnosis, please consult a healthcare professional.";
}



export default function Symptom() {
  const [symptom, setSymptom] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => setSymptom(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symptom.trim()) return;
    const userMsg = { sender: "user", text: symptom };
    const aiMsg = { sender: "ai", text: getAIResponse(symptom) };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setSymptom("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={symptom}
          onChange={handleInputChange}
          placeholder="Describe your symptom..."
        />
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            setMessages([]);
            setSymptom("");
          }}
          style={{ marginLeft: "8px" }}
        >
          Start new check
        </button>
      </form>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

