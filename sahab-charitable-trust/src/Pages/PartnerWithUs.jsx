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

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: "#27ae60", marginBottom: "1rem" }}>Partner With Us</h1>

      {submitted ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Thank you! We’ll contact you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "left",
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "0.8rem",
              background: "#27ae60",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default PartnerWithUs;
