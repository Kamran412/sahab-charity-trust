import React from "react";

const Impact = () => (
  <div style={{ maxWidth: 800, margin: "3rem auto", padding: "2rem", textAlign: "center" }}>
    <h2 style={{ color: "#27ae60", marginBottom: "1rem" }}>Our Impact</h2>
    <p>We measure success by lives touched, not just numbers.</p>
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem", flexWrap: "wrap" }}>
      <div>
        <h3 style={{ fontSize: "2rem", color: "#2c3e50" }}>12,000+</h3>
        <p>Women Empowered</p>
      </div>
      <div>
        <h3 style={{ fontSize: "2rem", color: "#2c3e50" }}>18,500+</h3>
        <p>Children Educated</p>
      </div>
      <div>
        <h3 style={{ fontSize: "2rem", color: "#2c3e50" }}>250+</h3>
        <p>Health Camps Conducted</p>
      </div>
    </div>
  </div>
);

export default Impact;