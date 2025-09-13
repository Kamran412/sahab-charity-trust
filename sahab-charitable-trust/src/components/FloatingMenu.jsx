import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Auto-close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
      width: "56px",
      height: "56px",
      fontSize: "1.6rem",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      transition: "transform 0.2s ease-in-out",
    },
    dropdown: {
      position: "absolute",
      bottom: "70px",
      right: 0,
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      padding: "0.5rem 0",
      minWidth: "200px",
      display: "flex",
      flexDirection: "column",
      animation: "fadeInMenu 0.3s ease forwards",
    },
    item: {
      padding: "0.7rem 1rem",
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      fontSize: "0.95rem",
      transition: "background 0.2s ease",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    icon: {
      fontSize: "1.1rem",
    },
    welcome: {
      padding: "0.6rem 1rem",
      fontSize: "0.9rem",
      color: "#777",
      borderBottom: "1px solid #eee",
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
          .floating-menu a:hover {
            background-color: #f6fff9;
          }
          .floating-menu button:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <button
        style={styles.button}
        onClick={() => setOpen(!open)}
        title="More Info"
        aria-label="Open floating menu"
      >
        ❔
      </button>

      {open && (
        <div style={styles.dropdown}>
          <div style={styles.welcome}>Explore more about Sahab Trust:</div>
          <NavLink to="/impact" style={styles.item}>
            <span style={styles.icon}>📊</span> Impact
          </NavLink>
          <NavLink to="/testimonials" style={styles.item}>
            <span style={styles.icon}>💬</span> Testimonials
          </NavLink>
          <NavLink to="/faq" style={styles.item}>
            <span style={styles.icon}>❓</span> FAQ
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;