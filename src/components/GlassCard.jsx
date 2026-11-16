import React from 'react';

const GlassCard = ({ children, className = "", style: customStyle = {} }) => {
  const baseStyle = {
    background: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    padding: "2rem",
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
    ...customStyle,
  };

  return (
    <div
      className={className}
      style={baseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 14px 40px rgba(56, 189, 248, 0.12)";
        e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.2)";
        e.currentTarget.style.borderColor = customStyle.borderColor || "rgba(255, 255, 255, 0.08)";
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
