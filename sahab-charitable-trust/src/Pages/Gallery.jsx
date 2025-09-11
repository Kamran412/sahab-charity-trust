import React from "react";

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "1rem",
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    color: "#27ae60",
    marginBottom: "1.5rem",
    fontSize: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
};

const images = [
  // Women Empowerment
  "w.jpg",
  "/images/w2.jpg",
  "/images/w3.jpg",

  // Children in Poverty
  "/images/c1.jpg",
  "/images/c2.jpg",
  "/images/c3.jpg",

  // Disability Support
  "/images/d1.jpg",
  "/images/d2.jpg",

  // Rural Education
  "/images/r1.jpg",
  "/images/r2.jpg",

  // Community Health
  "/images/h1.jpg",
  "/images/h2.jpg",

  // NGO Volunteers
  "/images/n3.jpg",
  "/images/n1.webp",

  // Cultural & Community
  "/images/i1.jpg",
  "/images/i2.jpg",

  // Smiles & Hope
  "/images/s1.jpg",
  "/images/s2.jpg",

  // Education & Empowerment
  "/images/e1.jpg",
  "/images/e2.jpg",
];

const Gallery = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Our Gallery</h1>
    <div style={styles.grid}>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Gallery image ${idx + 1}`}
          style={styles.image}
          loading="lazy"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ))}
    </div>
  </div>
);

export default Gallery;