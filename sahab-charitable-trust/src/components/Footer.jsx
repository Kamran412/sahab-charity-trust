import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const styles = {
    footer: {
      background: "#222",
      color: "#fff",
      padding: "3rem 1rem",
      fontFamily: "Segoe UI, sans-serif",
      position: "relative",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "2rem",
      textAlign: "left",
    },
    section: {
      flex: "1 1 250px",
    },
    heading: {
      fontSize: "1.2rem",
      fontWeight: "600",
      marginBottom: "1rem",
    },
    text: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
    },
    iconRow: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem",
    },
    icon: {
      width: "36px",
      height: "36px",
      background: "#444",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "1.2rem",
      textDecoration: "none",
      transition: "background 0.3s, transform 0.2s",
    },
    map: {
      width: "100%",
      height: "200px",
      border: "none",
      borderRadius: "8px",
      marginTop: "1rem",
    },
    bottom: {
      textAlign: "center",
      marginTop: "2rem",
      fontSize: "0.85rem",
      opacity: 0.8,
    },
    whatsapp: {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      backgroundColor: "#25D366",
      color: "#fff",
      borderRadius: "50%",
      width: "52px",
      height: "52px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.6rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 9999,
      textDecoration: "none",
    },
  };

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.section}>
            <h4 style={styles.heading}>Contact Us</h4>
            <p style={styles.text}>📍 Meerut, Uttar Pradesh, India</p>
            <p style={styles.text}>📞 +91 98765 43210</p>
            <p style={styles.text}>📧 sahabtrust@gmail.com</p>
            <p style={styles.text}>🕒 Mon–Sat: 9am to 6pm</p>
            <iframe
              title="Sahab Trust Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.77507888922!2d77.695!3d28.983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6d6c2e3e3e3f%3A0xabc1234567890!2sMeerut%2C%20UP!5e0!3m2!1sen!2sin!4v1699999999999"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div style={styles.section}>
            <h4 style={styles.heading}>Trust Info</h4>
            <p style={styles.text}>Registered under Indian Charitable Trust Act</p>
            <p style={styles.text}>Reg. No: SAHAB/2015/NGO/UP</p>
            <p style={styles.text}>PAN: ABCDE1234F</p>
          </div>

          <div style={styles.section}>
            <h4 style={styles.heading}>Follow Us</h4>
            <div style={styles.iconRow}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
                aria-label="Twitter/X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          &copy; {new Date().getFullYear()} Sahab Charitable Trust. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsapp}
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default Footer;