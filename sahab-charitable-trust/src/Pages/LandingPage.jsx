import React from "react";
import UpcomingEvents from "./UpcomingEvents"; // Adjust path if needed

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fefefe" }}>
      {/* 🌊 Hero Section with Background Image */}
      <section
        style={{
          backgroundImage: "url('water-hands.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "5rem 2rem",
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            zIndex: 1,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
            Welcome to Sahab Charitable Trust
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            Empowering communities through health, education, and sustainability.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <UpcomingEvents />

      {/* Testimonials Section */}
      <section style={{ padding: "3rem 2rem", background: "#f0f0f0", textAlign: "center" }}>
        <h2 style={{ color: "#27ae60", marginBottom: "2rem" }}>💬 Testimonials</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            { name: "Ayesha", message: "Sahab Trust changed my life with their education drive." },
            { name: "Ravi", message: "Their health camp was a blessing for our village." },
            { name: "Fatima", message: "Transparent, impactful, and truly community-driven." },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                textAlign: "left",
              }}
            >
              <p>"{t.message}"</p>
              <h4 style={{ marginTop: "1rem", color: "#2c3e50" }}>– {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", background: "#27ae60", color: "#fff", textAlign: "center" }}>
        <p>© 2025 Sahab Charitable Trust | Built with ❤️ by me and my team</p>
      </footer>
    </div>
  );
};

export default LandingPage;