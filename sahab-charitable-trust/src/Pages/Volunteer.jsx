import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    message: "",
  });
  const [volunteerId, setVolunteerId] = useState(null);
  const cardRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        const uniqueId = "VOL-" + Math.floor(Math.random() * 100000);
        setVolunteerId(uniqueId);
        alert(data.message || "Volunteer added successfully!");
      } else {
        alert(data.error || "Error adding volunteer!");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend!");
    }
  };

  const downloadPDF = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = 100;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 55, 40, width, height);
    pdf.save(`${formData.name}_Volunteer_ID.pdf`);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      paddingTop: "120px",
      paddingBottom: "2rem",
      background: "#f6fff9",
      fontFamily: "Segoe UI, sans-serif",
    },
    form: {
      maxWidth: "400px",
      margin: "0 auto",
      padding: "2rem",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "0.8rem",
      marginBottom: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      boxSizing: "border-box",
    },
    button: {
      padding: "0.8rem 1.5rem",
      background: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "0.5rem",
      width: "100%",
      fontSize: "1.05rem",
    },
    card: {
      width: "320px",
      margin: "2rem auto",
      padding: "1.5rem",
      border: "2px solid #27ae60",
      borderRadius: "12px",
      textAlign: "center",
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.page}>
      {!volunteerId ? (
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: "1rem", color: "#27ae60" }}>Become a Volunteer</h2>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem" }}>
            Join Sahab Charitable Trust and help uplift communities through your time and skills.
          </p>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            style={styles.input}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="skills"
            placeholder="Your Skills"
            style={styles.input}
            value={formData.skills}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            style={{ ...styles.input, height: "80px", resize: "vertical" }}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" style={styles.button}>Get Volunteer ID</button>
        </form>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div ref={cardRef} style={styles.card}>
            <h3 style={{ color: "#27ae60", marginBottom: "1rem" }}>Volunteer ID Card</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            {formData.skills && <p><strong>Skills:</strong> {formData.skills}</p>}
            {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
            <p><strong>Volunteer ID:</strong> {volunteerId}</p>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#555" }}>
              Sahab Charitable Trust
            </p>
          </div>
          <button style={styles.button} onClick={downloadPDF}>Download ID Card</button>
        </div>
      )}
    </div>
  );
};

export default Volunteer;