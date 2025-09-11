import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#eafaf1',
    padding: '1rem',
  },
  form: {
    maxWidth: '400px',
    width: '100%',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(44,62,80,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    fontFamily: 'Segoe UI, sans-serif',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outlineColor: '#27ae60',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  success: {
    color: '#27ae60',
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: '500',
  },
  error: {
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: '500',
  },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Thank you! Your message has been sent.');
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setStatus(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('Server error. Please try again later.');
    }

    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 style={{ color: '#27ae60', marginBottom: '0.5rem' }}>Contact Us</h2>

        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          autoFocus
        />

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          style={styles.input}
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
        />

        <button
          style={styles.button}
          type="submit"
          onMouseOver={(e) => (e.target.style.backgroundColor = '#219150')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#27ae60')}
        >
          Send Message
        </button>

        {status && (
          <div style={status.includes('Thank') ? styles.success : styles.error}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;