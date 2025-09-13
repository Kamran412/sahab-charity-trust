import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes fadeInDropdown {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .dropdown-menu {
        animation: fadeInDropdown 0.3s ease forwards;
      }
      @media (min-width: 769px) {
        .mobile-toggle {
          display: none !important;
        }
      }
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(styleTag);
    };
  }, []);

  const handleDropdown = (menu) => setOpenDropdown(menu);
  const closeDropdown = () => setOpenDropdown(null);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const styles = {
    navbar: {
      position: "fixed", // changed from sticky
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      background: "#fff",
      boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      zIndex: 1000,
      padding: "0.75rem 1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      boxSizing: "border-box", // added for layout stability
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      cursor: "pointer",
    },
    logoImg: {
      height: "80px",
      borderRadius: 50,
    },
    logoText: {
      fontWeight: 600,
      fontSize: "1.2rem",
      color: "#27ae60",
      letterSpacing: "0.5px",
    },
    toggle: {
      fontSize: "1.5rem",
      cursor: "pointer",
      display: "block",
    },
    navList: {
      listStyle: "none",
      display: mobileOpen || !isMobile ? "flex" : "none",
      flexDirection: !isMobile ? "row" : "column",
      gap: "1.2rem",
      margin: 0,
      padding: !isMobile ? 0 : "1rem 0",
      width: !isMobile ? "auto" : "100%",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      fontSize: "0.95rem",
    },
    active: {
      color: "#27ae60",
      borderBottom: "2px solid #27ae60",
    },
    donate: {
      backgroundColor: "#27ae60",
      color: "#fff",
      padding: "0.4rem 0.9rem",
      borderRadius: "4px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      textDecoration: "none",
      fontWeight: 500,
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%",
      left: 0,
      background: "#fff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      borderRadius: "6px",
      marginTop: "0.4rem",
      minWidth: "160px",
      display: "flex",
      flexDirection: "column",
      zIndex: 2000,
    },
    dropdownItem: {
      padding: "0.6rem 1rem",
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      fontSize: "0.9rem",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer} onClick={() => navigate("/landing")}>
        <img src="logo.png" alt="Sahab Charitable Trust" style={styles.logoImg} />
        <span style={styles.logoText}>Sahab Charitable Trust</span>
      </div>

      <div className="mobile-toggle" style={styles.toggle} onClick={toggleMobile}>☰</div>

      <ul style={styles.navList}>
        <li>
          <NavLink to="/" style={styles.link} activeStyle={styles.active}>Home</NavLink>
        </li>

        <li style={{ position: "relative" }} onMouseEnter={() => handleDropdown("programs")} onMouseLeave={closeDropdown}>
          <span style={{ ...styles.link, cursor: "pointer" }}>Programs ▾</span>
          {openDropdown === "programs" && (
            <div className="dropdown-menu" style={styles.dropdownMenu}>
              <NavLink to="/program" style={styles.dropdownItem}>Program</NavLink>
              <NavLink to="/events" style={styles.dropdownItem}>Upcoming Events</NavLink>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/about" style={styles.link} activeStyle={styles.active}>About</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" style={styles.link} activeStyle={styles.active}>Gallery</NavLink>
        </li>

        <li style={{ position: "relative" }} onMouseEnter={() => handleDropdown("involved")} onMouseLeave={closeDropdown}>
          <span style={{ ...styles.link, cursor: "pointer" }}>Get Involved ▾</span>
          {openDropdown === "involved" && (
            <div className="dropdown-menu" style={styles.dropdownMenu}>
              <NavLink to="/volunteer" style={styles.dropdownItem}>Volunteer</NavLink>
              <NavLink to="/partner" style={styles.dropdownItem}>Partner With Us</NavLink>
              <NavLink to="/donate" style={styles.dropdownItem}>Donate</NavLink>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/contact" style={styles.link} activeStyle={styles.active}>Contact</NavLink>
        </li>

        <li>
          <NavLink to="/donate" style={styles.donate}>Donate</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;