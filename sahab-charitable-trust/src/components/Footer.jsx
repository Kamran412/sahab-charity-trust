import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter/X icon

const footerStyle = {
  minHeight: "100vh",
  background: "#222",
  color: "#fff",
  padding: "2rem 1rem",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const iconRowStyle = {
  display: "flex",
  gap: "1.5rem",
  justifyContent: "center",
  margin: "1rem 0",
};

const iconStyle = {
  width: "40px",
  height: "40px",
  background: "#444",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "1.4rem",
  textDecoration: "none",
  transition: "background 0.3s, transform 0.2s",
};

const Footer = () => (
  <footer style={footerStyle}>
    <div
      style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem" }}
    >
      Sahab Charitable Trust
    </div>
    <div style={iconRowStyle}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        aria-label="Twitter/X"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
    <div style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
      &copy; {new Date().getFullYear()} Sahab Charitable Trust. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
