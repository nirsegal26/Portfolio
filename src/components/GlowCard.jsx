import { useRef } from "react";

const GlowCard = ({ children }) => {
  const cardRef = useRef(null);
  let rafId = null; 

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    if (rafId) cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      cardRef.current.style.setProperty("--start", angle + 60);
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-5 md:p-10 mb-5 relative overflow-hidden will-change-transform"
    >
      <div className="glow"></div>
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;