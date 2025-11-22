import { theme } from "../config/theme";
import { content } from "../config/content";

interface TechStackProps {
  skills: typeof content.skills;
}

export default function TechStack({ skills }: TechStackProps) {
  const allTechs = Object.values(skills).flat();
  
  const row1Techs = allTechs.slice(0, Math.ceil(allTechs.length / 2));
  const row2Techs = allTechs.slice(Math.ceil(allTechs.length / 2));
  
  const duplicatedRow1 = [...row1Techs, ...row1Techs, ...row1Techs];
  const duplicatedRow2 = [...row2Techs, ...row2Techs, ...row2Techs];

  return (
    <div className="relative w-full overflow-hidden py-10 md:py-20">
      {/* Top row */}
      <div className="flex gap-4 md:gap-8 mb-4 md:mb-8 animate-marquee">
        {duplicatedRow1.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={`top-${idx}`}
              className="shrink-0 group cursor-pointer"
            >
              <div
                className="relative px-4 py-3 md:px-6 md:py-5 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-110 overflow-hidden"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.5)",
                  border: `2px solid ${theme.colors.border}`,
                  minWidth: "140px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.accent.primary;
                  e.currentTarget.style.boxShadow = theme.effects.cardGlowHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${theme.colors.accent.primary}15, transparent 70%)`,
                  }}
                />
                
                {/* Content */}
                <div className="relative flex items-center gap-3 justify-center">
                  <Icon 
                    size={24}
                    className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                    style={{ color: theme.colors.accent.primary }}
                  />
                  <span
                    className="text-sm md:text-lg font-bold whitespace-nowrap"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom row */}
      <div className="flex gap-4 md:gap-8 animate-marquee-reverse">
        {duplicatedRow2.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={`bottom-${idx}`}
              className="shrink-0 group cursor-pointer"
            >
              <div
                className="relative px-4 py-3 md:px-6 md:py-5 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-110 overflow-hidden"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.5)",
                  border: `2px solid ${theme.colors.border}`,
                  minWidth: "140px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.accent.secondary;
                  e.currentTarget.style.boxShadow = theme.effects.cardGlowHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${theme.colors.accent.secondary}15, transparent 70%)`,
                  }}
                />
                
                {/* Content */}
                <div className="relative flex items-center gap-3 justify-center">
                  <Icon 
                    size={24}
                    className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                    style={{ color: theme.colors.accent.secondary }}
                  />
                  <span
                    className="text-sm md:text-lg font-bold whitespace-nowrap"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 50s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
