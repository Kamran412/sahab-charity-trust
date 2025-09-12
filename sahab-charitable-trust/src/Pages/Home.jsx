import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgramCard from "./ProgramCard";

const styles = {
  section: {
    maxWidth: 700,
    margin: "3rem auto",
    padding: "2rem",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
    textAlign: "center",
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(39, 174, 96, 0.65)",
    zIndex: 1,
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: 600,
    margin: "0 auto",
  },
  button: {
    padding: "0.75rem 2rem",
    background: "#27ae60",
    color: "#fff",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginTop: "2rem",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(44,62,80,0.08)",
    textDecoration: "none",
    display: "inline-block",
  },
  programs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    margin: "3rem auto",
    maxWidth: 1200,
  },
  donate: {
    maxWidth: 600,
    margin: "3rem auto",
    padding: "2rem",
    background: "#eafaf1",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
    textAlign: "center",
  },
  eventsSection: {
    padding: "3rem 2rem",
    background: "#f9f9f9",
    textAlign: "center",
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1000px",
    margin: "0 auto 2rem",
  },
  eventCard: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    padding: "1.5rem",
    textAlign: "left",
  },
  linkButton: {
    display: "inline-block",
    padding: "0.8rem 1.5rem",
    background: "#27ae60",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const Home = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
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
            programs.map((program) => (
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
