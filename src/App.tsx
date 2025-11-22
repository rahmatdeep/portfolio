import { content } from "./config/content";
import { theme } from "./config/theme";
import MagneticCursor from "./components/MagneticCursor";
import AnimatedSection from "./components/AnimatedSection";
import FloatingShapes from "./components/FloatingShapes";
import TechStack from "./components/TechStack";
import {
  IoChevronDown,
  IoChevronUp,
  IoMail,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function App() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set()
  );
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleExpanded = (idx: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <div
      className={`relative min-h-screen ${
        isMobile ? "cursor-auto" : "cursor-none"
      }`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        fontFamily: theme.fonts.body,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.03) 0%, transparent 50%)
        `,
      }}
    >
      {!isMobile && <MagneticCursor />}
      <FloatingShapes />

      <div className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-between px-4 sm:px-8 md:px-20 max-w-7xl mx-auto py-8">
          {/* Top Bar */}
          <AnimatedSection>
            <div className="flex items-center justify-between">
              {/* Availability Status */}
              <div
                className="relative group flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm overflow-hidden"
                style={{
                  backgroundColor: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    theme.colors.accent.primary;
                  e.currentTarget.style.boxShadow = `0 0 20px ${theme.colors.accent.primary}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${theme.colors.accent.primary}15, transparent)`,
                    animation: "shimmer 2s infinite",
                  }}
                />

                <div className="relative flex items-center gap-1 z-10">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#10b981" }}
                  >
                    <div
                      className="absolute inset-0 h-2 w-2 rounded-full animate-ping"
                      style={{ backgroundColor: "#10b981", opacity: 0.5 }}
                    />
                  </div>
                </div>

                <div className="relative z-10 flex items-center">
                  <span
                    className="text-xs md:text-sm font-mono"
                    style={{
                      color: theme.colors.accent.primary,
                    }}
                  >
                    status:&nbsp;
                  </span>
                  <span
                    className="text-xs md:text-sm font-mono overflow-hidden inline-block"
                    style={{
                      color: theme.colors.text.primary,
                      borderRight: `2px solid ${theme.colors.accent.primary}`,
                      animation:
                        "typing 3.5s steps(9) infinite, blink 0.75s step-end infinite",
                      whiteSpace: "nowrap",
                      maxWidth: "0",
                    }}
                  >
                    available
                  </span>
                </div>

                <style>{`
                  @keyframes typing {
                    0%, 100% { max-width: 0; }
                    50%, 90% { max-width: 5.5rem; }
                  }
                  @keyframes blink {
                    50% { border-color: transparent; }
                  }
                  @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                  }
                `}</style>
              </div>

              {/* Quick Links */}
              <div className="flex gap-3">
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      theme.colors.accent.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                  }}
                >
                  <IoLogoGithub
                    size={18}
                    style={{ color: theme.colors.text.primary }}
                  />
                </a>
                <a
                  href={content.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      theme.colors.accent.secondary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                  }}
                >
                  <IoLogoTwitter
                    size={18}
                    style={{ color: theme.colors.text.primary }}
                  />
                </a>
                <a
                  href={content.personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.text.primary,
                    fontWeight: "600",
                    fontSize: "0.875rem", // text-sm
                    fontFamily: theme.fonts.mono,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      theme.colors.accent.tertiary;
                    e.currentTarget.style.color = theme.colors.accent.tertiary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                    e.currentTarget.style.color = theme.colors.text.primary;
                  }}
                >
                  Resume
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Center - Main Content */}
          <AnimatedSection delay={100}>
            <div className="space-y-6 md:space-y-8">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-black leading-none tracking-tight"
                style={{ fontFamily: theme.fonts.heading }}
              >
                <span
                  style={{
                    background: theme.colors.accent.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {content.personal.name.split(" ")[0]}
                </span>
                <br />
                <span style={{ color: theme.colors.text.primary }}>
                  {content.personal.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl"
                style={{ color: theme.colors.text.secondary }}
              >
                {content.personal.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2"
                  style={{
                    background: theme.colors.accent.gradient,
                    color: theme.colors.background,
                    boxShadow: theme.effects.cardGlow,
                  }}
                >
                  View Projects
                  <HiArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href={`mailto:${content.personal.email}`}
                  className="px-8 py-4 rounded-xl font-semibold text-base md:text-lg border-2 transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2"
                  style={{
                    borderColor: theme.colors.accent.primary,
                    color: theme.colors.accent.primary,
                    backgroundColor: theme.colors.surface,
                  }}
                >
                  <IoMail size={20} />
                  Get In Touch
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom - Scroll Indicator */}
          <AnimatedSection delay={200}>
            <div className="flex flex-col items-center gap-2 opacity-50">
              <span
                className="text-xs uppercase tracking-wider"
                style={{ color: theme.colors.text.muted }}
              >
                Scroll to explore
              </span>
              <IoChevronDown
                size={20}
                className="animate-bounce"
                style={{ color: theme.colors.text.muted }}
              />
            </div>
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 md:py-32 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto"
        >
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-20"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Projects
            </h2>
          </AnimatedSection>

          <div className="space-y-12 md:space-y-24">
            {content.projects.map((project, idx) => {
              const isExpanded = expandedProjects.has(idx);
              const isHovered = hoveredProject === idx;

              return (
                <AnimatedSection key={project.title} delay={idx * 100}>
                  <div
                    className="relative group"
                    onMouseEnter={() => !isMobile && setHoveredProject(idx)}
                    onMouseLeave={() => !isMobile && setHoveredProject(null)}
                  >
                    <div
                      className="relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500"
                      style={{
                        backgroundColor: theme.colors.surface,
                        border: `2px solid ${
                          isHovered
                            ? theme.colors.accent.primary
                            : theme.colors.border
                        }`,
                        boxShadow: isHovered
                          ? theme.effects.cardGlowHover
                          : theme.effects.cardGlow,
                      }}
                    >
                      <div className="p-5 sm:p-6 md:p-8 lg:p-12">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                              <h3
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                                style={{ fontFamily: theme.fonts.heading }}
                              >
                                {project.title}
                              </h3>
                              <span
                                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit"
                                style={{
                                  backgroundColor:
                                    theme.colors.accent.primary + "20",
                                  color: theme.colors.accent.primary,
                                }}
                              >
                                0{idx + 1}
                              </span>
                            </div>
                            <p
                              className="text-xs md:text-sm uppercase tracking-wider"
                              style={{ color: theme.colors.accent.secondary }}
                            >
                              {project.tagline}
                            </p>
                          </div>

                          <div className="flex gap-3">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 md:p-3 rounded-xl transition-all duration-300 active:scale-95 md:hover:scale-110"
                              style={{
                                backgroundColor: theme.colors.surfaceHover,
                                border: `1px solid ${theme.colors.border}`,
                              }}
                            >
                              <HiExternalLink
                                size={isMobile ? 18 : 20}
                                style={{ color: theme.colors.text.primary }}
                              />
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 md:p-3 rounded-xl transition-all duration-300 active:scale-95 md:hover:scale-110"
                              style={{
                                backgroundColor: theme.colors.surfaceHover,
                                border: `1px solid ${theme.colors.border}`,
                              }}
                            >
                              <IoLogoGithub
                                size={isMobile ? 18 : 20}
                                style={{ color: theme.colors.text.primary }}
                              />
                            </a>
                          </div>
                        </div>

                        <p
                          className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed"
                          style={{ color: theme.colors.text.secondary }}
                        >
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-mono"
                              style={{
                                backgroundColor: theme.colors.background,
                                color: theme.colors.text.muted,
                                border: `1px solid ${theme.colors.border}`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => toggleExpanded(idx)}
                          className="flex items-center gap-2 font-semibold text-sm md:text-base transition-all duration-300"
                          style={{ color: theme.colors.accent.primary }}
                        >
                          {isExpanded ? (
                            <>
                              Hide Live Preview
                              <IoChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              View Live Preview
                              <IoChevronDown size={16} />
                            </>
                          )}
                        </button>
                      </div>

                      <div
                        className="overflow-hidden transition-all duration-700 ease-in-out"
                        style={{
                          maxHeight: isExpanded ? "700px" : "0px",
                        }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-12">
                          <div
                            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden"
                            style={{
                              border: `2px solid ${theme.colors.border}`,
                              backgroundColor: theme.colors.background,
                            }}
                          >
                            <iframe
                              src={isExpanded ? project.liveUrl : ""}
                              title={project.title}
                              className="w-full h-full"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>

                      {!isMobile && (
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
                          style={{
                            opacity: isHovered ? 0.5 : 0,
                            background: `radial-gradient(circle at 50% 50%, ${theme.colors.accent.primary}10, transparent 70%)`,
                          }}
                        />
                      )}
                    </div>

                    <div
                      className="hidden sm:flex absolute -top-6 md:-top-8 -right-6 md:-right-8 w-16 h-16 md:w-20 md:h-20 rounded-full items-center justify-center font-black text-4xl md:text-5xl transition-all duration-500"
                      style={{
                        background: theme.colors.accent.gradient,
                        color: theme.colors.background,
                        opacity: isHovered ? 0.5 : 0.2,
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-32 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-20 text-center"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Tech Stack
            </h2>
            <TechStack skills={content.skills} />
          </AnimatedSection>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-32 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Left - CTA */}
              <div className="space-y-6">
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                  style={{
                    fontFamily: theme.fonts.heading,
                    background: theme.colors.accent.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let's Work Together
                </h2>
                <p
                  className="text-lg md:text-xl"
                  style={{ color: theme.colors.text.secondary }}
                >
                  Have a project in mind? Let's create something amazing
                  together.
                </p>

                <a
                  href={`mailto:${content.personal.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: theme.colors.accent.gradient,
                    color: theme.colors.background,
                    boxShadow: theme.effects.cardGlow,
                  }}
                >
                  <IoMail size={22} />
                  Send me an email
                </a>
              </div>

              {/* Right - Contact Info Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${content.personal.email}`}
                  className="group block p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `2px solid ${theme.colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      theme.colors.accent.primary;
                    e.currentTarget.style.boxShadow =
                      theme.effects.cardGlowHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: theme.colors.accent.primary + "20",
                        }}
                      >
                        <IoMail
                          size={24}
                          style={{ color: theme.colors.accent.primary }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-sm uppercase tracking-wider"
                          style={{ color: theme.colors.text.muted }}
                        >
                          Email
                        </p>
                        <p
                          className="text-base md:text-lg font-semibold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          {content.personal.email}
                        </p>
                      </div>
                    </div>
                    <HiArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: theme.colors.accent.primary }}
                    />
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `2px solid ${theme.colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      theme.colors.accent.secondary;
                    e.currentTarget.style.boxShadow =
                      theme.effects.cardGlowHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: theme.colors.accent.secondary + "20",
                        }}
                      >
                        <IoLogoGithub
                          size={24}
                          style={{ color: theme.colors.accent.secondary }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-sm uppercase tracking-wider"
                          style={{ color: theme.colors.text.muted }}
                        >
                          GitHub
                        </p>
                        <p
                          className="text-base md:text-lg font-semibold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          @{content.personal.github.split("/").pop()}
                        </p>
                      </div>
                    </div>
                    <HiExternalLink
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: theme.colors.accent.secondary }}
                    />
                  </div>
                </a>

                {/* Twitter Card */}
                <a
                  href={content.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `2px solid ${theme.colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      theme.colors.accent.tertiary;
                    e.currentTarget.style.boxShadow =
                      theme.effects.cardGlowHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.colors.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: theme.colors.accent.tertiary + "20",
                        }}
                      >
                        <IoLogoTwitter
                          size={24}
                          style={{ color: theme.colors.accent.tertiary }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-sm uppercase tracking-wider"
                          style={{ color: theme.colors.text.muted }}
                        >
                          Twitter
                        </p>
                        <p
                          className="text-base md:text-lg font-semibold"
                          style={{ color: theme.colors.text.primary }}
                        >
                          @{content.personal.twitter.split("/").pop()}
                        </p>
                      </div>
                    </div>
                    <HiExternalLink
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: theme.colors.accent.tertiary }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Footer */}
          <AnimatedSection delay={100}>
            <div
              className="mt-20 pt-8 border-t text-center"
              style={{ borderColor: theme.colors.border }}
            >
              <p className="text-sm" style={{ color: theme.colors.text.muted }}>
                Crafted with &lt;3 by {content.personal.name}
              </p>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
