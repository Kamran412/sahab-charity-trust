import React, { useState } from "react";
import QRCode from "react-qr-code";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: 100,
  });

  const [loading, setLoading] = useState(false);

  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleDonate = async () => {
    if (formData.amount < 100) {
      alert("Minimum donation is ₹100");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all the fields");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    setLoading(true);
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    const options = {
      key: "your Razorpay payment id", // Replace with your Razorpay TEST key
      amount: formData.amount * 100,
      currency: "INR",
      name: "Sahab Charitable Trust",
      description: "Donation",
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#27ae60" },
      handler: async (response) => {
        try {
          const res = await fetch("http://localhost:8080/api/donates", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              amount: formData.amount,
              message: `Razorpay Payment ID: ${response.razorpay_payment_id}`,
            }),
          });

          const data = await res.json();
          if (res.ok) {
            alert(`✅ Donation successful! Payment ID: ${response.razorpay_payment_id}`);
            setFormData({ name: "", email: "", phone: "", amount: 100 });
          } else {
            alert("Donation save failed: " + data.error);
          }
        } catch (err) {
          console.error(err);
          alert("Error saving donation to backend");
        }
      },
    };

    const paymentObject = new window.Razorpay(options);

    paymentObject.on("payment.failed", function (response) {
      console.error(response.error);
      alert("❌ Payment failed: " + response.error.description);
    });

    paymentObject.open();
    setLoading(false);
  };

  const inputStyle = {
    padding: "0.75rem",
    width: "100%",
    maxWidth: "300px",
    margin: "0.5rem auto",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    display: "block",
  };

  return (
    <div style={{ minHeight: "100vh", padding: "120px 1rem 2rem", background: "#f6fff9", textAlign: "center" }}>
      <h1 style={{ color: "#27ae60", fontSize: "2rem", marginBottom: "0.5rem" }}>Support Our Mission</h1>
      <p style={{ maxWidth: 600, margin: "0 auto 2rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
        Your donation helps us provide education, healthcare, and empowerment programs for women and children in need.
      </p>

      {/* Donation Form */}
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        style={inputStyle}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        style={inputStyle}
      />
      <input
        type="number"
        min="100"
        placeholder="Amount (₹)"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
        style={inputStyle}
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        style={{
          padding: "0.75rem 2rem",
          background: "#27ae60",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginTop: "1rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {loading ? "Processing..." : `Donate ₹${formData.amount}`}
      </button>

      {/* QR Code for UPI */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "#fff",
          borderRadius: "12px",
          display: "inline-block",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "#333" }}>Or Scan & Pay via UPI</h3>
        <QRCode
          value="upi://pay?pa=sahabtrust@ibl&pn=Sahab%20Charitable%20Trust&cu=INR"
          size={180}
        />
        <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
          UPI ID: <strong>sahabtrust@ibl</strong>
        </p>
      </div>
    </div>
  );
};

export default Donate;