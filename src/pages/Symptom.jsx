import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SymptomCheck from "../components/SymptomCheck";
import RiskMeter from "../components/Meter";

function Symptom() {
  const [resetForm, setResetForm] = useState(null);
  const [riskValue, setRiskValue] = useState(0);

  return (
    <section className="min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-indigo-500/[0.05] blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-5%] top-[20%]">
          <div 
            className="w-[300px] h-[300px] relative animate-float"
            style={{animation: "float 12s ease-in-out infinite"}}
          >
            <div className="absolute inset-0 rounded-3xl bg-blue-500/[0.08] backdrop-blur-[1px] border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]" />
          </div>
        </div>
        
        <div className="absolute right-[10%] bottom-[15%]">
          <div 
            className="w-[250px] h-[250px] relative animate-float-delay"
            style={{animation: "float 10s ease-in-out 2s infinite"}}
          >
            <div className="absolute inset-0 rounded-full bg-indigo-500/[0.08] backdrop-blur-[1px] border border-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]" />
          </div>
        </div>
      </div>
      
      <Navbar />
      <div className="flex justify-center items-center gap-[7rem] relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          
          <div className="w-full max-w-md bg-white/[0.02] backdrop-blur-md rounded-3xl shadow-2xl p-0 mt-12 border border-blue-500/20 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/10">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl px-6 py-5 flex items-center gap-3 relative overflow-hidden">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-400"></span>
              </span>
              <h2 className="text-2xl font-extrabold text-white flex-1 text-center tracking-wide drop-shadow-lg animate-fade-in-down">
                AI Symptom Checker
              </h2>
            </div>
            <div className="p-8 animate-fade-in-up">
              <SymptomCheck onReset={setResetForm} onRiskChange={setRiskValue} />
            </div>
            <div className="bg-blue-900/20 rounded-b-3xl px-6 py-3 flex items-center justify-between text-xs text-blue-300 border-t border-blue-500/20 animate-fade-in">
              <button
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:scale-95"
                type="button"
                onClick={() => resetForm?.()}
              >
                Start New Check
              </button>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-400 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
              }
              .animate-float {
                animation: float 12s ease-in-out infinite;
              }
              .animate-float-delay {
                animation: float 10s ease-in-out 2s infinite;
              }
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
        <div className="w-[40%] h-[50%]">
          <RiskMeter value={riskValue} />
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}

export default Symptom;