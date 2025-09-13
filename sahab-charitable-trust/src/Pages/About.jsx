import React from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    paddingTop: '120px',
    paddingBottom: '2rem',
    backgroundColor: '#f6fff9',
    fontFamily: 'Segoe UI, sans-serif',
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(44,62,80,0.08)',
    textAlign: 'left',
    lineHeight: '1.6',
  },
  heading: {
    color: '#27ae60',
    marginBottom: '1rem',
    fontSize: '2rem',
    textAlign: 'center',
  },
  subheading: {
    color: '#2c3e50',
    marginTop: '2rem',
    marginBottom: '0.75rem',
    fontSize: '1.3rem',
    fontWeight: '600',
  },
  paragraph: {
    fontSize: '1.05rem',
    color: '#555',
    marginBottom: '1rem',
  },
};

const About = () => (
  <div style={styles.page}>
    <div style={styles.container}>
      <h1 style={styles.heading}>About Sahab Charitable Trust</h1>

      <h2 style={styles.subheading}>Our Mission</h2>
      <p style={styles.paragraph}>
        To restore dignity, opportunity, and hope in communities that have long been overlooked. We work hand-in-hand with local families, empowering them through education, healthcare, and livelihood support—because real change begins at the grassroots.
      </p>

      <h2 style={styles.subheading}>Our Vision</h2>
      <p style={styles.paragraph}>
        A compassionate and inclusive society where no one is left behind. Sahab Charitable Trust envisions a future where empowered individuals become agents of change in their own communities—breaking cycles of poverty, illiteracy, and neglect.
      </p>

      <h2 style={styles.subheading}>Our Story</h2>
      <p style={styles.paragraph}>
        Sahab Charitable Trust was founded in 2015 by a group of passionate volunteers who witnessed the struggles faced by women and children in rural areas.
        Inspired to make a difference, they started small—organizing health camps and literacy drives. Over the years, the trust has grown into a vibrant organization,
        touching thousands of lives through its dedicated programs and community partnerships.
      </p>
    </div>
  </div>
);

export default About;