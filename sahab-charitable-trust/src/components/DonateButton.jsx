import React from 'react';

const buttonStyle = {
  padding: '0.75rem 2rem',
  background: '#27ae60',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer'
};

const loadScript = src =>
  new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const DonateButton = ({ name = '', email = '' }) => {
  const handleDonate = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
      amount: 50000, // ₹500 in paise
      currency: 'INR',
      name: 'Sahab Charitable Trust',
      description: 'Donation',
      image: 'logo.png', // Optional: NGO logo
      handler: function (response) {
        alert('Thank you for your donation! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: name,
        email: email
      },
      theme: {
        color: '#27ae60'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button style={buttonStyle} onClick={handleDonate}>
      Donate ₹500
    </button>
  );
};

export default DonateButton;