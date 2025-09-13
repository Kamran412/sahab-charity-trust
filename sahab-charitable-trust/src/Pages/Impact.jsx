import React from "react";

const Impact = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      paddingTop: "120px",
      paddingBottom: "2rem",
      backgroundColor: "#f6fff9",
      fontFamily: "Segoe UI, sans-serif",
      textAlign: "center",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "2rem",
    },
    heading: {
      color: "#27ae60",
      marginBottom: "1rem",
      fontSize: "2rem",
    },
    subheading: {
      fontSize: "1.05rem",
      color: "#555",
      marginBottom: "2rem",
    },
    grid: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1.5rem",
    },
    card: {
      flex: "1 1 220px",
      background: "#fff",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    },
    number: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "0.5rem",
    },
    label: {
      fontSize: "1rem",
      color: "#333",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Impact</h2>
        <p style={styles.subheading}>
          We measure success by lives touched, not just numbers.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.number}>12,000+</div>
            <div style={styles.label}>Women Empowered</div>
          </div>
          <div style={styles.card}>
            <div style={styles.number}>18,500+</div>
            <div style={styles.label}>Children Educated</div>
          </div>
          <div style={styles.card}>
            <div style={styles.number}>250+</div>
            <div style={styles.label}>Health Camps Conducted</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;