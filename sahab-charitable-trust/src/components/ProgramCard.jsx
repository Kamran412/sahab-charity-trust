import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 12px rgba(44,62,80,0.12)',
  padding: '1.5rem',
  maxWidth: 350,
  textAlign: 'center',
  transition: 'transform 0.2s, boxShadow 0.2s',
};

const cardHoverStyle = {
  transform: 'translateY(-6px) scale(1.03)',
  boxShadow: '0 6px 24px rgba(44,62,80,0.18)',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '8px 8px 0 0',
  marginBottom: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1.2rem',
  background: '#27ae60',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '0.75rem',
};

const placeholder =
  'https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f9?auto=format&fit=crop&w=400&q=80';

const ProgramCard = ({ id, title, description, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={hovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image || placeholder} alt={title} style={imageStyle} />
      <h3 style={{ color: '#27ae60', margin: '0.5rem 0' }}>{title}</h3>
      <p style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{description}</p>
      <Link to={`/details/${id}`}>
        <button style={buttonStyle}>Learn More</button>
      </Link>
    </div>
  );
};

export default ProgramCard;