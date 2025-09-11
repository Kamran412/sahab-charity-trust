import React from "react";
import QRCode from "react-qr-code";

const styles = {
  card: {
    maxWidth: 420,
    margin: "2rem auto",
    padding: "1.5rem",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "1.4rem",
    fontWeight: 700,
    color: "#1e293b",
    marginBottom: "0.75rem",
  },
  sub: {
    fontSize: "0.95rem",
    color: "#475569",
    marginBottom: "1rem",
  },
  qrWrap: {
    padding: 12,
    borderRadius: 12,
    display: "inline-block",
    position: "relative",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  },
  logoWrap: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 10,
    background: "#fff",
    padding: 6,
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  info: {
    marginTop: "1rem",
    fontSize: "0.95rem",
    color: "#334155",
    wordBreak: "break-word",
  },
  btnRow: {
    display: "flex",
    gap: "0.75rem",
    justifyContent: "center",
    marginTop: "1rem",
    flexWrap: "wrap",
  },
  btn: {
    padding: "0.55rem 0.9rem",
    borderRadius: 8,
    fontWeight: 600,
    border: "1px solid #10b981",
    background: "#10b981",
    color: "#fff",
    textDecoration: "none",
  },
  outlineBtn: {
    padding: "0.55rem 0.9rem",
    borderRadius: 8,
    fontWeight: 600,
    border: "1px solid #10b981",
    background: "transparent",
    color: "#10b981",
    textDecoration: "none",
  },
};

export default function DonationQR({
  title = "Donate via UPI",
  note = "Scan the QR with any UPI app (PhonePe, GPay, Paytm).",
  value = "upi://pay?pa=your-upi-id@upi&pn=Sahab%20Charitable%20Trust&cu=INR",
  upiId = "your-upi-id@upi",
  website = "https://your-ngo-website.example",
  logoUrl,
}) {
  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>{title}</h3>
      <p style={styles.sub}>{note}</p>

      <div style={styles.qrWrap}>
        <QRCode
          value={value}
          size={220}
          bgColor="#ffffff"
          fgColor="#111827"
          level="M"
          style={{ borderRadius: 12, height: "auto", width: 220 }}
        />
        {logoUrl && (
          <div style={styles.logoWrap}>
            <img src={logoUrl} alt="Trust Logo" style={styles.logo} />
          </div>
        )}
      </div>

      <div style={styles.info}>
        <div><strong>UPI ID:</strong> {upiId}</div>
        <div style={{ marginTop: 6 }}>
          <strong>Alt link:</strong> {website}
        </div>
      </div>

      <div style={styles.btnRow}>
        <a href={value} style={styles.btn} aria-label="Pay with UPI">
          Pay with UPI
        </a>
        <a href={website} target="_blank" rel="noreferrer" style={styles.outlineBtn} aria-label="Visit NGO website">
          Visit Website
        </a>
      </div>
    </div>
  );
}