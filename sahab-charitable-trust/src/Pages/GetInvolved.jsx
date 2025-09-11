import React from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaHandshake, FaDonate } from "react-icons/fa";

const styles = {
  container: {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Segoe UI, sans-serif",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#333",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  },
  card: {
    flex: "1 1 250px",
    maxWidth: "280px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#0077b6",
    marginBottom: "0.8rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.4",
  },
  button: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#27ae60",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const cards = [
  {
    icon: <FaHandsHelping style={styles.icon} />,
    title: "Volunteer",
    text: "Join our mission by volunteering your time and skills to support women and children in need.",
    link: "/contact",
    label: "Join as Volunteer",
  },
  {
    icon: <FaHandshake style={styles.icon} />,
    title: "Partner With Us",
    text: "Collaborate with us as an organization or business to create long-lasting impact.",
    link: "/contact",
    label: "Become a Partner",
  },
  {
    icon: <FaDonate style={styles.icon} />,
    title: "Donate",
    text: "Support our initiatives financially to help us reach more women and children in underserved areas.",
    link: "/donate",
    label: "Donate Now",
  },
];

const GetInvolved = () => (
  <div style={styles.container}>
    <h2 style={styles.header}>Get Involved</h2>
    <div style={styles.cardContainer}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        >
          {card.icon}
          <h3 style={styles.title}>{card.title}</h3>
          <p style={styles.text}>{card.text}</p>
          <Link to={card.link} style={styles.button} aria-label={card.label}>
            {card.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default GetInvolved;