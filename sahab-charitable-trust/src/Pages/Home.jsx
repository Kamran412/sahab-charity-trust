import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgramCard from "./ProgramCard";

const Home = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sahab-charity-trust-1.onrender.com/api/programs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched programs:", data); // ✅ Debug log
        setPrograms(data);
        console.log("Fetched programs:", data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Empowering Communities, Changing Lives
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
            Join us in making a difference through our charitable programs.
          </p>
          <Link to="/get-involved" style={styles.button}>
            Get Involved
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={{ color: "#27ae60", marginBottom: "1rem" }}>About Us</h2>
        <p>
          <strong>Mission:</strong> To empower women and children in underserved communities by providing access to education, healthcare, and sustainable livelihood opportunities.
        </p>
        <p>
          <strong>Vision:</strong> A world where every woman and child has the resources and support to lead a healthy, educated, and dignified life.
        </p>
      </section>

      {/* Programs Section */}
      <section>
        <h2 style={{ color: "#27ae60", textAlign: "center", marginBottom: "2rem" }}>
          Our Key Initiatives
        </h2>
        <div style={styles.programs}>
          {loading ? (
            <p>Loading Programs...</p>
          ) : (
            programs
              .filter((program) => program.category) // ✅ Skip broken entries
              .map((program) => (
                <ProgramCard
                  key={program._id}
                  category={program.category}
                  title={program.title}
                  description={program.description}
                  image={program.image}
                />
              ))
          )}
        </div>
      </section>

      {/* Events Section */}
      <section style={styles.eventsSection}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#27ae60", marginBottom: "2rem" }}>
          🌟 Upcoming Events
        </h2>
        <div style={styles.eventsGrid}>
          <div style={styles.eventCard}>
            <h3 style={{ color: "#2c3e50" }}>Health Awareness Camp</h3>
            <p><b>Date:</b> 12 Sept 2025</p>
            <p>Free health checkups and awareness session for rural communities.</p>
          </div>
          <div style={styles.eventCard}>
            <h3 style={{ color: "#2c3e50" }}>Education Drive</h3>
            <p><b>Date:</b> 20 Sept 2025</p>
            <p>Distributing books and study material to underprivileged children.</p>
          </div>
          <div style={styles.eventCard}>
            <h3 style={{ color: "#2c3e50" }}>Tree Plantation Program</h3>
            <p><b>Date:</b> 25 Sept 2025</p>
            <p>Join us in making the city greener by planting trees.</p>
          </div>
        </div>
        <Link to="/events" style={styles.linkButton}>
          View All Events
        </Link>
      </section>

      {/* Donate Section */}
      <section style={styles.donate}>
        <h2 style={{ color: "#27ae60", marginBottom: "1rem" }}>Support Our Mission</h2>
        <p style={{ marginBottom: "2rem" }}>
          Your donation helps us provide education, healthcare, and empowerment programs for women and children in need. Every contribution makes a difference!
        </p>
        <Link to="/donate" style={styles.button}>
          Donate ₹500
        </Link>
      </section>
    </div>
  );
};

export default Home;