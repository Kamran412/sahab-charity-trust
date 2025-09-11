import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  const styles = {
    container: {
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      zIndex: 9999,
    },
    button: {
      backgroundColor: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "52px",
      height: "52px",
      fontSize: "1.5rem",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },
    dropdown: {
      position: "absolute",
      bottom: "60px",
      right: 0,
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      padding: "0.5rem 0",
      minWidth: "160px",
      display: "flex",
      flexDirection: "column",
      animation: "fadeInMenu 0.3s ease forwards",
    },
    item: {
      padding: "0.6rem 1rem",
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      fontSize: "0.95rem",
    },
  };

  return (
    <div className="floating-menu" style={styles.container}>
      <style>
        {`
          @keyframes fadeInMenu {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (min-width: 769px) {
            .floating-menu {
              display: none !important;
            }
          }
        `}
      </style>

      <button style={styles.button} onClick={() => setOpen(!open)} title="More Info">
        ❔
      </button>

      {open && (
        <div style={styles.dropdown}>
          <NavLink to="/impact" style={styles.item} onClick={() => setOpen(false)}>Impact</NavLink>
          <NavLink to="/testimonials" style={styles.item} onClick={() => setOpen(false)}>Testimonials</NavLink>
          <NavLink to="/faq" style={styles.item} onClick={() => setOpen(false)}>FAQ</NavLink>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;