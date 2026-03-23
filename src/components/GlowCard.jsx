import { useRef } from "react";

const GlowCard = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-5 md:p-10 mb-5 relative overflow-hidden group will-change-transform"
    >
      <div className="glow-overlay opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;