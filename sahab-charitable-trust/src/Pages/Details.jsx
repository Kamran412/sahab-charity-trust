import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/programs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!program) return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Program not found</h2>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ color: "#27ae60" }}>{program.title}</h1>
      <img src={program.image} alt={program.title} style={{ width: "100%", borderRadius: 8, margin: "1rem 0" }} />
      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.6 }}>{program.details}</p>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "0.6rem 1.2rem", backgroundColor: "#27ae60", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: "bold" }}
      >
        Back
      </button>
    </div>
  );
};

export default Details;
