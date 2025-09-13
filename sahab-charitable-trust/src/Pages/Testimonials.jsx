import React, { useState } from "react";

const initialTestimonials = [
  {
    name: "Ayesha Khan",
    quote: "Volunteering with Sahab Trust changed my life. I saw hope in every child’s eyes.",
  },
  {
    name: "Ravi Sharma",
    quote: "Partnering with Sahab was the best decision for our CSR initiative.",
  },
  {
    name: "Meena Joshi",
    quote: "Their healthcare camps saved lives in our village. Forever grateful.",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", quote: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.quote) {
      setTestimonials((prev) => [...prev, formData]);
      setFormData({ name: "", quote: "" });
      setShowForm(false);
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      paddingTop: "120px",
      paddingBottom: "2rem",
      backgroundColor: "#f6fff9",
      fontFamily: "Segoe UI, sans-serif",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2rem",
      textAlign: "center",
    },
    heading: {
      color: "#27ae60",
      marginBottom: "2rem",
      fontSize: "2rem",
    },
    card: {
      marginBottom: "2rem",
      padding: "1.25rem",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      textAlign: "left",
    },
    quote: {
      fontStyle: "italic",
      marginBottom: "0.5rem",
      fontSize: "1.05rem",
      color: "#444",
    },
    name: {
      fontWeight: "bold",
      color: "#333",
    },
    button: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "1rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
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
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>What People Say</h2>

        {testimonials.map((t, i) => (
          <div key={i} style={styles.card}>
            <p style={styles.quote}>"{t.quote}"</p>
            <p style={styles.name}>– {t.name}</p>
          </div>
        ))}

        <button onClick={() => setShowForm(!showForm)} style={styles.button}>
          {showForm ? "Cancel" : "Give Your Experience"}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ marginTop: "2rem", textAlign: "left" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              name="quote"
              placeholder="Your Experience"
              value={formData.quote}
              onChange={handleChange}
              required
              rows={4}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Submit Testimonial
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Testimonials;