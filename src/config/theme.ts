export const theme = {
  colors: {
    background: "#070707",
    surface: "#141414",
    surfaceHover: "#222222",
    text: {
      primary: "#e8e6e3",
      secondary: "#b3aea8",
      muted: "#7d7a77",
    },
    accent: {
      primary: "#ff6b61",
      secondary: "#f59d42",
      tertiary: "#f5a053",
      gradient:
        "linear-gradient(135deg, #ff6b61 0%, #f59d42 60%, #f5a053 100%)",
    },
    border: "#292929",
  },
  fonts: {
    heading: "sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "monospace",
  },

  spacing: {
    section: "10rem",
    container: "1280px",
  },

  effects: {
    cardGlow: "0 0 40px rgba(255, 107, 107, 0.15)",
    cardGlowHover: "0 0 60px rgba(255, 107, 107, 0.3)",
  },

  simpleView: {
    colors: {
      background: "#100f0f",
      foreground: "#cecdc3",
      muted: "#a19f91",
      mutedMore: "#7a7970",
      border: "#2a292780",
      linkDimmed: "color-mix(in oklab, #cecdc3 40%, transparent)",
    },
    fonts: {
      body: "Inter, Inter Fallback, ui-sans-serif, system-ui, sans-serif",
    },
  },
};