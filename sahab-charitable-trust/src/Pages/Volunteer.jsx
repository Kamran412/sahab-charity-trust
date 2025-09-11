import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const formStyle = {
  maxWidth: "400px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.8rem 1.5rem",
  background: "#27ae60",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  margin: "0.5rem",
};

const cardStyle = {
  width: "320px",
  margin: "2rem auto",
  padding: "1.5rem",
  border: "2px solid #27ae60",
  borderRadius: "12px",
  textAlign: "center",
  background: "#f6fff9",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const Volunteer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", skills: "", message: "" });
  const [volunteerId, setVolunteerId] = useState(null);
  const cardRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend POST request
      const res = await fetch("http://localhost:8080/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // Backend successful → generate unique Volunteer ID
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

  return (
    <div>
      {!volunteerId ? (
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: "1rem", color: "#27ae60" }}>
            Become a Volunteer
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            style={inputStyle}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            style={inputStyle}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="skills"
            placeholder="Your skills"
            style={inputStyle}
            value={formData.skills}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            style={{ ...inputStyle, height: "80px" }}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" style={buttonStyle}>
            Get Volunteer ID
          </button>
        </form>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div ref={cardRef} style={cardStyle}>
            <h3 style={{ color: "#27ae60" }}>Volunteer ID Card</h3>
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p><b>Phone:</b> {formData.phone}</p>
            {formData.skills && <p><b>Skills:</b> {formData.skills}</p>}
            {formData.message && <p><b>Message:</b> {formData.message}</p>}
            <p><b>Volunteer ID:</b> {volunteerId}</p>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#555" }}>
              Sahab Charitable Trust
            </p>
          </div>
          <button style={buttonStyle} onClick={downloadPDF}>
            Download ID Card
          </button>
        </div>
      )}
    </div>
  );
};

export default Volunteer;
