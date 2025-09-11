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

  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "2rem", textAlign: "center" }}>
      <h2 style={{ color: "#27ae60", marginBottom: "1rem" }}>What People Say</h2>

      {testimonials.map((t, i) => (
        <div key={i} style={{ marginBottom: "2rem", padding: "1rem", background: "#f9f9f9", borderRadius: "8px" }}>
          <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>"{t.quote}"</p>
          <strong>- {t.name}</strong>
        </div>
      ))}

      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#27ae60",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
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
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <textarea
            name="quote"
            placeholder="Your Experience"
            value={formData.quote}
            onChange={handleChange}
            required
            rows={4}
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#27ae60",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Submit Testimonial
          </button>
        </form>
      )}
    </div>
  );
};

export default Testimonials;