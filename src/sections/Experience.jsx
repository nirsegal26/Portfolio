import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import ProjectImage from "../components/ProjectImage"; 

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ limitCallbacks: true });

const Experience = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current.querySelectorAll(".exp-card-wrapper");

    cards.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%", 
          once: true, 
        }
      });

      tl.fromTo(
        [
          card.querySelector(".card-border"), 
          card.querySelector(".exp-card-logo"), 
          card.querySelector(".exp-card-title"), 
          card.querySelector(".exp-card-list"), 
        ],
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out" 
        }
      );
    });

  }, { scope: containerRef }); 

  return (
    <section ref={containerRef} id="experience" className="flex-center md:mt-40 mt-20 section-padding scroll-mt-22 xl:px-0 overflow-hidden">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Top Projects" sub="Projects Overview" />
        
        <div className="mt-32 relative projects-container">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={index} className="exp-card-wrapper relative z-10">
                <div className="flex flex-col xl:flex-row items-start gap-10">
                  <div className="xl:w-2/6 w-full shrink-0">
                    <GlowCard className="card-border">
                      <ProjectImage 
                        imgPath={card.imgPath} 
                        gifPath={card.gifPath} 
                        githubLink={card.githubLink} 
                      />
                    </GlowCard>
                  </div>

                  <div className="xl:w-4/6 w-full flex flex-col justify-center pb-10">
                    <div className="flex xl:gap-8 gap-5 relative z-20">
                      {/* Logo (Hidden on smaller screens) */}
                      <div className="exp-card-logo hidden sm:block shrink-0 mt-1">
                        <img 
                          src={card.logoPath} 
                          alt="logo" 
                          className="w-14 h-14 object-contain bg-black/20 p-2 rounded-xl border border-white/10 shadow-lg" 
                        />
                      </div>
                      
                      {/* Text details */}
                      <div>
                        <div className="exp-card-title">
                          <h1 className="font-semibold text-3xl text-white">{card.title}</h1>
                          <p className="text-[#839CB5] italic mt-1 text-lg">{card.second_title || "About the Project"}</p>
                        </div>
                        
                        {/* Responsibilities list */}
                        <ul className="exp-card-list list-disc ms-5 mt-6 flex flex-col gap-3 text-white-50">
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