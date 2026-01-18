import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  const style = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)", // Safari
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <div 
      className={className} 
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 40px rgba(56, 189, 248, 0.1)";
        e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;