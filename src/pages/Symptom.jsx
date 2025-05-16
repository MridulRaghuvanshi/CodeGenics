import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SymptomCheck from "../components/SymptomCheck";

function Symptom() {
  const [resetForm, setResetForm] = useState(null);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-50 animate-bg-pan">
      <Navbar />
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-0 mt-12 border border-emerald-100 transition-transform duration-300 hover:scale-105 hover:shadow-emerald-200">
        <div className="bg-emerald-600 rounded-t-3xl px-6 py-5 flex items-center gap-3 relative overflow-hidden">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
          </span>
          <h2 className="text-2xl font-extrabold text-white flex-1 text-center tracking-wide drop-shadow-lg animate-fade-in-down">
            AI Symptom Checker
          </h2>
        </div>
        <div className="p-8 animate-fade-in-up">
          <SymptomCheck onReset={setResetForm} />
        </div>
        <div className="bg-emerald-50 rounded-b-3xl px-6 py-3 flex items-center justify-between text-xs text-emerald-700 border-t animate-fade-in">
          <button
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-95"
            type="button"
            onClick={() => resetForm?.()}
          >
            Start New Check
          </button>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-emerald-400 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" />
              <path className="opacity-75" d="M4 12a8 8 0 018-8" />
            </svg>
            Powered by AI
          </span>
          <span className="italic">Your data is private</span>
        </div>
      </div>

      <style>
        {`
          @keyframes bg-pan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-bg-pan {
            background-size: 200% 200%;
            animation: bg-pan 12s ease-in-out infinite;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease both;
          }
        `}
      </style>
    </div>
  );
}

export default Symptom;
