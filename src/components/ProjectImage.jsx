import React, { useState } from "react";

const ProjectImage = ({ imgPath, gifPath, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative cursor-pointer overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(githubLink, "_blank")} // Open Github
    >
      {/* Cover Photo*/}
      <img
        src={isHovered ? gifPath : imgPath}
        alt="project-preview"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105"
      />
    </div>
  );
};

export default ProjectImage;
