import React, { useState, useEffect, useRef } from "react";

const ProjectImage = ({ imgPath, gifPath, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const preloadRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = gifPath;
    preloadRef.current = img; 

    return () => {
      preloadRef.current = null;
    };
  }, [gifPath]);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full cursor-pointer"
      >
        <img
          src={imgPath}
          alt="project"
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          style={{ opacity: isHovered ? 0 : 1 }}
          loading="lazy"
        />

        <img
          src={gifPath}
          alt="project animated"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out pointer-events-none"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </a>
    </div>
  );
};

export default ProjectImage;