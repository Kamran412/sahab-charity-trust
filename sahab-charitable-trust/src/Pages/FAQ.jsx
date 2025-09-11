import React from "react";

const faqs = [
  {
    question: "How can I volunteer?",
    answer: "Visit our Get Involved page and fill out the volunteer form. We’ll get in touch with you shortly.",
  },
  {
    question: "Where does my donation go?",
    answer: "100% of your donation supports education, healthcare, and livelihood programs for underserved communities.",
  },
  {
    question: "Is Sahab Trust government registered?",
    answer: "Yes, we are a registered charitable trust under Indian law.",
  },
];

const FAQ = () => (
  <div style={{ maxWidth: 800, margin: "3rem auto", padding: "2rem" }}>
    <h2 style={{ color: "#27ae60", marginBottom: "1rem", textAlign: "center" }}>Frequently Asked Questions</h2>
    {faqs.map((faq, i) => (
      <div key={i} style={{ marginBottom: "1.5rem" }}>
        <h4 style={{ color: "#2c3e50" }}>{faq.question}</h4>
        <p style={{ color: "#555" }}>{faq.answer}</p>
      </div>
    ))}
  </div>
);

export default FAQ;