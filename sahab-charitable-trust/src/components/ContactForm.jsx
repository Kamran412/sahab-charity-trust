import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const styles = {
    form: {
      maxWidth: 400,
      margin: "2rem auto",
      padding: "1.5rem",
      background: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(44, 62, 80, 0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "0.75rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    button: {
      padding: "0.75rem",
      background: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    success: {
      color: "#27ae60",
      textAlign: "center",
      marginTop: "1rem",
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={{ color: "#27ae60", marginBottom: "0.5rem" }}>Contact Us</h2>
      <input
        style={styles.input}
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        style={styles.input}
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        style={styles.input}
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
      />
      <button style={styles.button} type="submit">Send</button>
      {submitted && <div style={styles.success}>Thank you! Your message has been sent.</div>}
    </form>
  );
};

export default ContactForm;