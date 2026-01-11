import { content } from "../config/content";
import { theme } from "../config/theme";

export default function SimpleView() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.simpleView.colors.background,
        color: theme.simpleView.colors.foreground,
      }}
    >
      <main
        className="mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-[680px]"
        style={{
          fontFamily: theme.simpleView.fonts.body,
        }}
      >
        {/* Header with image and name */}
        <div className="flex items-center gap-4 sm:gap-6 mb-6 pb-6">
          <img
            src="/me.png"
            alt={content.personal.name}
            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full object-cover border shrink-0"
            style={{ borderColor: theme.simpleView.colors.border }}
          />
          <div className="min-w-0">
            <h1 className="text-sm sm:text-base font-bold mb-1 leading-tight tracking-tight">
              {content.personal.name}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <p
                className="text-xs sm:text-sm font-medium"
                style={{ color: theme.simpleView.colors.muted }}
              >
                {content.personal.title}
              </p>
            </div>
          </div>
        </div>

        {/* Projects / Products */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold mb-4 tracking-tight">
            Products
          </h2>
          <div className="flex flex-col gap-4 sm:gap-4">
            {content.projects.map((project) => (
              <div key={project.title}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="text-sm sm:text-[15px] font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 sm:gap-4 text-xs sm:text-[13px]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors font-medium no-underline"
                      style={{ color: theme.simpleView.colors.linkDimmed }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          theme.simpleView.colors.foreground)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          theme.simpleView.colors.linkDimmed)
                      }
                    >
                      [github]
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link transition-colors font-medium no-underline"
                      style={{ color: theme.simpleView.colors.linkDimmed }}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          theme.simpleView.colors.linkDimmed)
                      }
                    >
                      [live]
                    </a>
                  </div>
                </div>
                <p
                  className="text-xs sm:text-[13px] mt-1 leading-relaxed"
                  style={{ color: theme.simpleView.colors.muted }}
                >
                  {project.tagline}
                </p>
                <p
                  className="text-xs sm:text-[13px] mt-1 leading-relaxed"
                  style={{ color: theme.simpleView.colors.mutedMore }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold mb-4 tracking-tight">
            Tech Stack
          </h2>
          <div className="flex flex-col gap-2">
            {Object.entries(content.skills).map(([category, skills]) => (
              <div
                key={category}
                className="text-xs sm:text-[13px] leading-relaxed"
              >
                <span className="font-semibold inline-block min-w-20 sm:min-w-[100px]">
                  {category}
                </span>
                <span style={{ color: theme.simpleView.colors.muted }}>
                  {skills.map((skill) => skill.name).join(" \u00b7 ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer
          className="pt-4 border-t"
          style={{ borderColor: theme.simpleView.colors.border }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-[13px]">
            <a
              href={content.personal.resume}
              target="_blank"
              className="transition-colors no-underline"
              style={{ color: theme.simpleView.colors.linkDimmed }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.foreground)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.linkDimmed)
              }
            >
              Resume
            </a>
            <span style={{ color: theme.simpleView.colors.border }}>
              &middot;
            </span>
            <a
              href={`mailto:${content.personal.email}`}
              className="transition-colors no-underline"
              style={{ color: theme.simpleView.colors.linkDimmed }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.foreground)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.linkDimmed)
              }
            >
              Email
            </a>
            <span style={{ color: theme.simpleView.colors.border }}>
              &middot;
            </span>
            <a
              href={content.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors no-underline"
              style={{ color: theme.simpleView.colors.linkDimmed }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.foreground)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.linkDimmed)
              }
            >
              GitHub
            </a>
            <span style={{ color: theme.simpleView.colors.border }}>
              &middot;
            </span>
            <a
              href={content.personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors no-underline"
              style={{ color: theme.simpleView.colors.linkDimmed }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.foreground)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  theme.simpleView.colors.linkDimmed)
              }
            >
              Twitter
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
