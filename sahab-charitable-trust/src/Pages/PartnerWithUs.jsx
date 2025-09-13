import React, { useState } from "react";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        alert(data.message || "✅ Partner request submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "❌ Error submitting request!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error connecting to backend!");
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      paddingTop: "120px",
      paddingBottom: "2rem",
      background: "#f6fff9",
      fontFamily: "Segoe UI, sans-serif",
      textAlign: "center",
    },
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      background: "#fff",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      textAlign: "left",
    },
    heading: {
      color: "#27ae60",
      marginBottom: "1rem",
      textAlign: "center",
    },
    subheading: {
      fontSize: "1.05rem",
      color: "#555",
      marginBottom: "2rem",
      textAlign: "center",
    },
    label: {
      fontWeight: "500",
      marginBottom: "0.3rem",
      display: "block",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      marginBottom: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      background: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    success: {
      color: "green",
      fontWeight: "bold",
      fontSize: "1.1rem",
      marginTop: "2rem",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Partner With Us</h1>
      <p style={styles.subheading}>
        Collaborate with Sahab Charitable Trust to create lasting impact. Let’s build a better future together.
      </p>

      {submitted ? (
        <p style={styles.success}>✅ Thank you! We’ll contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.container}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ ...styles.input, resize: "vertical" }}
          />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default PartnerWithUs;