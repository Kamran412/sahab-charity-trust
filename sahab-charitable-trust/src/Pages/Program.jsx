import React, { useEffect, useState } from "react";
import ProgramCard from "../components/ProgramCard";

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${baseURL}/api/programs`)
      .then((res) => res.json())
      .then((data) => {
        const cleanData = Array.isArray(data) ? data : data.data || [];
        console.log("✅ Programs fetched:", cleanData);
        setPrograms(cleanData);
      })
      .catch((err) => {
        console.error("❌ API error:", err);
      });
  }, []);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    margin: "3rem auto",
    maxWidth: 1200,
    padding: "0 1rem",
  };

  return (
    <section>
      <h1
        style={{
          color: "#27ae60",
          marginBottom: "1rem",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Our Programs
      </h1>

      {/* Debug UI */}
      <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
        Total programs fetched: {programs.length}
      </p>

      {programs.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>
          No programs available right now. Please check back soon!
        </p>
      ) : (
        <div style={containerStyle}>
          {programs.map((program) => (
            <ProgramCard
              key={program._id}
              id={program.category}
              title={program.title}
              description={program.description}
              image={program.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Programs;