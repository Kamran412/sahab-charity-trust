import React, { useState } from "react";

const sectionStyle = {
  padding: "3rem 2rem",
  background: "#f9f9f9",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#27ae60",
  marginBottom: "2rem",
};

const eventsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  justifyContent: "center",
  marginBottom: "2rem",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  padding: "1.5rem",
  textAlign: "left",
  transition: "transform 0.2s",
};

const buttonStyle = {
  display: "inline-block",
  padding: "0.8rem 1.5rem",
  background: "#27ae60",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
};

const allEvents = [
  {
    id: 1,
    title: "Health Awareness Camp",
    date: "12 Sept 2025",
    description: "Free health checkups and awareness session for rural communities.",
  },
  {
    id: 2,
    title: "Education Drive",
    date: "20 Sept 2025",
    description: "Distributing books and study material to underprivileged children.",
  },
  {
    id: 3,
    title: "Tree Plantation Program",
    date: "25 Sept 2025",
    description: "Join us in making the city greener by planting trees.",
  },
  {
    id: 4,
    title: "Blood Donation Camp",
    date: "28 Sept 2025",
    description: "Donate blood and save lives in collaboration with local hospitals.",
  },
  {
    id: 5,
    title: "Skill Development Workshop",
    date: "30 Sept 2025",
    description: "Empowering youth with vocational training and career guidance.",
  },
  {
    id: 6,
    title: "Cleanliness Drive",
    date: "2 Oct 2025",
    description: "Join hands to clean public spaces and spread awareness.",
  },
];

const UpcomingEvents = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>🌟 Upcoming Events</h2>

      <div style={eventsGrid}>
        {allEvents.slice(0, visibleCount).map((event) => (
          <div key={event.id} style={cardStyle}>
            <h3 style={{ color: "#2c3e50" }}>{event.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              <b>Date:</b> {event.date}
            </p>
            <p style={{ margin: "0.5rem 0" }}>{event.description}</p>
          </div>
        ))}
      </div>

      {visibleCount < allEvents.length && (
        <button onClick={handleLoadMore} style={buttonStyle}>
          View More Events
        </button>
      )}
    </section>
  );
};

export default UpcomingEvents;