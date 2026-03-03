import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import ProjectImage from "../components/ProjectImage"; 

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Cards Animation
    gsap.utils.toArray(".exp-card-wrapper").forEach((card) => {
      gsap.from(card, {
        y: 50, 
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        force3D: true, 
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });   

    // 2. Text Animation
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        x: 30, 
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        force3D: true,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
        },
      });
    });
  }, { scope: containerRef }); 

  return (
    <section ref={containerRef} id="experience" className="flex-center md:mt-40 mt-20 section-padding scroll-mt-22 xl:px-0 overflow-hidden">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Top Projects" sub="Projects Overview" />
        
        <div className="mt-32 relative projects-container">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={index} className="exp-card-wrapper relative z-10 will-change-transform">
                <div className="flex flex-col xl:flex-row items-start gap-10">
                  
                  {/* Right */}
                  <div className="xl:w-2/6 w-full shrink-0">
                    <GlowCard>
                      <ProjectImage 
                        imgPath={card.imgPath} 
                        gifPath={card.gifPath} 
                        githubLink={card.githubLink} 
                      />
                    </GlowCard>
                  </div>

                  {/* Left / Text Side */}
                  <div className="xl:w-4/6 w-full flex flex-col justify-center pb-10">
                    
                    <div className="expText flex xl:gap-8 gap-5 relative z-20">
                      <div className="hidden sm:block shrink-0 mt-1">
                        <img 
                          src={card.logoPath} 
                          alt="logo" 
                          className="w-14 h-14 object-contain bg-black/20 p-2 rounded-xl border border-white/10 shadow-lg" 
                        />
                      </div>
                      
                      <div>
                        <h1 className="font-semibold text-3xl text-white">{card.title}</h1>
                        <p className="text-[#839CB5] italic mt-1 text-lg">
                          {card.second_title || "About the Project"}
                        </p>
                        
                        <ul className="list-disc ms-5 mt-6 flex flex-col gap-3 text-white-50">
                          {card.responsibilities.map((res, i) => (
                            <li key={i} className="text-lg leading-relaxed">{res}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;