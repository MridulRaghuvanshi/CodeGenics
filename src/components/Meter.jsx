import { GaugeComponent } from "react-gauge-component";

export default function RiskMeter({ value = 50 }) {
  // Use the passed value prop or default to 50
  const riskScore = value;

  return (
    <div className="relative">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-1">Risk Assessment</h2>
        <p className="text-white/60 text-sm">Based on your symptoms</p>
      </div>
      
      <GaugeComponent
        value={riskScore}
        type="semicircle"
        labels={{
          valueLabel: {
            hide: true,
          },
          markLabel: {
            type: "outer",
            marks: [
              { value: 10, label: "Very Low" },
              { value: 30, label: "Low" },
              { value: 50, label: "Medium" },
              { value: 70, label: "High" },
              { value: 90, label: "Very High" },
            ],
            labelStyle: {
              fontSize: "14px",
              fontWeight: "bold",
              fill: "rgba(255, 255, 255, 0.8)",
              textShadow: "0px 0px 4px rgba(0,0,0,0.7)",
            },
          },
        }}
        arc={{
          colorArray: ["#3b82f6", "#6366f1", "#8b5cf6", "#d946ef", "#ec4899"],
          subArcs: [
            { limit: 20, tooltip: { text: "Risk: Very Low" }, showMark: true },
            { limit: 40, tooltip: { text: "Risk: Low" }, showMark: true },
            { limit: 60, tooltip: { text: "Risk: Medium" }, showMark: true },
            { limit: 80, tooltip: { text: "Risk: High" }, showMark: true },
            { limit: 100, tooltip: { text: "Risk: Very High" }, showMark: true },
          ],
          padding: 0.02,
          width: 0.3,
          subArcsLength: 1,
          cornerRadius: 1,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
          color: "#ffffff",
          type: "needle",
          width: 5,
          length: 0.6,
          offset: 0,
        }}
        dial={{
          baseWidth: 10,
          baseRadius: 20,
          color: "rgba(255, 255, 255, 0.3)",
          gradient: false,
        }}
        style={{
          width: "100%",
          height: "300px",
          background: "transparent",
        }}
      />

      {/* Risk Score display */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 shadow-lg">
          <div className="text-center">
            <div className="text-white/60 text-sm mb-1">Risk Score</div>
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
              {riskScore}
            </div>
          </div>
        </div>
      </div>
      
      {/* Gauge background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/5 to-indigo-500/5 rounded-full blur-xl opacity-70"></div>
    </div>
  );
}