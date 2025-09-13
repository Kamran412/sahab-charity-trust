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
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    display: "block",
  };

  return (
    <div style={{
      minHeight: "100vh",
      paddingTop: "120px",
      paddingBottom: "2rem",
      background: "#f6fff9",
      fontFamily: "Segoe UI, sans-serif",
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 1rem",
      }}>
        {/* Left: Donation Form */}
        <div style={{
          flex: "1 1 400px",
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
          <h2 style={{ color: "#27ae60", marginBottom: "1rem" }}>Support Our Mission</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#555" }}>
            Your donation helps us provide education, healthcare, and empowerment programs for women and children in need.
          </p>

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
              width: "100%",
              padding: "0.75rem",
              background: "#27ae60",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            {loading ? "Processing..." : `Donate ₹${formData.amount}`}
          </button>
        </div>

        {/* Right: QR + Impact Message */}
        <div style={{
          flex: "1 1 300px",
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}>
          <h3 style={{ marginBottom: "1rem", color: "#333" }}>Or Scan & Pay via UPI</h3>
          <QRCode
            value="upi://pay?pa=sahabtrust@ibl&pn=Sahab%20Charitable%20Trust&cu=INR"
            size={180}
          />
          <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
            UPI ID: <strong>sahabtrust@ibl</strong>
          </p>
          <hr style={{ margin: "2rem 0", borderColor: "#eee" }} />
          <p style={{ fontSize: "1rem", color: "#777" }}>
            Every ₹100 you donate helps us reach one more child with education, healthcare, and hope.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;