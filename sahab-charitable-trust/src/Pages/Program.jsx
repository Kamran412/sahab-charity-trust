import React, { useEffect, useState } from "react";
import ProgramCard from "../components/ProgramCard";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error(err));
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
          marginBottom: "2rem",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Our Programs
      </h1>

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