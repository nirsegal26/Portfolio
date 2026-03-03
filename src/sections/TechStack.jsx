import GlowCard from "../components/GlowCard";
import { skills } from "../constants";
import TitleHeader from "../components/TitleHeader";

const TechStack = () => {
  return (
    <section id="skills" className="section-padding scroll-mt-16">
      <div className="w-full md:px-20 px-5">
        <TitleHeader title="Tech Stack" sub="My Digital Toolbox" />
        
        <div className="grid-4-cols mt-16">
          {skills.map((skill, index) => (
            <GlowCard key={index}>
              <div className="flex flex-col items-center gap-4 group">
                <div className="size-16 flex-center bg-black-200 rounded-2xl border border-white/5 transition-transform duration-500 group-hover:scale-110">
                   <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="size-10 object-contain grayscale group-hover:grayscale-0 transition-all"
                    onError={(e) => e.target.src = "/icons/default-code.svg"} // Fallback
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-white font-medium text-lg">{skill.name}</h3>
                  <p className="text-blue-50 text-xs uppercase tracking-widest mt-1">
                    {skill.category}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;