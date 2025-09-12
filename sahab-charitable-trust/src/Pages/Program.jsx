import React, { useEffect, useState } from "react";
import ProgramCard from "../components/ProgramCard";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

 useEffect(() => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/programs`;
  console.log("Fetching from:", url); // ✅ Debug log

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log("Fetched programs:", data); // ✅ Confirm data
      setPrograms(data);
    })
    .catch((err) => console.error("Fetch error:", err.message));
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
              id={program._id}
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