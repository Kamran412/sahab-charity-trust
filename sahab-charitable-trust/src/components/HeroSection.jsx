import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes fadeInHero {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .hero-content {
        animation: fadeInHero 1.2s ease-out forwards;
      }
      .hero-button:hover {
        transform: scale(1.05);
        background-color: #218838;
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const styles = {
    section: {
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      color: "#fff",
      textAlign: "center",
      overflow: "hidden",
      paddingTop: "100px", // prevents overlap with fixed navbar
      boxSizing: "border-box",
    },
    bgImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
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
    content: {
      position: "relative",
      zIndex: 2,
      maxWidth: 600,
      width: "100%",
      margin: "0 auto",
      opacity: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      padding: "0 1rem",
      boxSizing: "border-box",
    },
    heading: {
      fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
    },
    paragraph: {
      fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
      marginBottom: "1.5rem",
      textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
    },
    button: {
      padding: "0.75rem 2rem",
      background: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginTop: "2rem",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(44,62,80,0.08)",
      transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
      textDecoration: "none",
      display: "inline-block",
    },
  };

  return (
    <section style={styles.section}>
      <img
        src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
        alt="Smiling children"
        loading="lazy"
        style={styles.bgImage}
      />
      <div style={styles.overlay}></div>
      <div className="hero-content" style={styles.content}>
        <h2 style={styles.heading}>Empowering Communities, Changing Lives</h2>
        <p style={styles.paragraph}>
          Join us in making a difference through our charitable programs.
        </p>
        <Link to="/get-involved" className="hero-button" style={styles.button}>
          Get Involved
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;