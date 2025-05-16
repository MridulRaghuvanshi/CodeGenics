import { GaugeComponent } from "react-gauge-component";

export default function RiskMeter() {
  const riskScore = 50;

  return (
    <div
      className="p-6 rounded-lg relative"
      style={{
        background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
      }}
    >
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
              { value: 10, label: "Risk: Very Low" },
              { value: 30, label: "Risk: Low" },
              { value: 50, label: "Risk: Medium" },
              { value: 70, label: "Risk: High" },
              { value: 90, label: "Risk: Very High" },
            ],
            labelStyle: {
              fontSize: "14px",
              fontWeight: "bold",
              fill: "white",
              textShadow: "0px 0px 3px rgba(0,0,0,0.5)",
            },
          },
        }}
        arc={{
          colorArray: ["#00a651", "#8dc63f", "#ffc20e", "#f7941d", "#ed1c24"],
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
          elastic: false,
          animationDelay: 0,
          color: "#333",
          type: "needle",
          width: 5,
          length: 0.6,
          offset: 0,
        }}
        dial={{
          baseWidth: 10,
          baseRadius: 20,
          color: "#333",
          gradient: false,
        }}
        style={{
          width: "100%",
          height: "300px",
          background: "transparent",
        }}
      />

      {/* Adjusted position of Risk Score text */}
      <div
        style={{
          position: "absolute",
          bottom: "150px", // moved up from 35px to 85px
          width: "85%",    
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Risk Score: {riskScore}
      </div>
    </div>
  );
}
