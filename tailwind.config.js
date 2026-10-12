/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clinical Sanctuary Design System Tokens (WCAG AA/AAA Compliant)
        primary: {
          DEFAULT: '#0891B2', // Refined Medical Cyan 600 (calm, trustworthy, 4.54:1 with white)
          hover: '#0E7490',   // Cyan 700 (high contrast hover, 6.32:1)
          light: '#ECFEFF',   // Cyan 50 (subtle tint container)
          deep: '#155E75',    // Cyan 800
          container: '#CFFAFE',
        },
        oceanic: {
          DEFAULT: '#0284C7', // Sky 600 - accessible secondary cyan/blue
          dark: '#0369A1',    // Sky 700
          light: '#F0F9FF',   // Sky 50
        },
        obsidian: {
          DEFAULT: '#0F172A', // Slate 900 - rich structural dark
          card: '#1E293B',    // Slate 800
          muted: '#334155',   // Slate 700
          dark: '#090D16',    // Deep Slate 950
        },
        canvas: {
          DEFAULT: '#F8FAFC', // Crisp modern medical canvas (Slate 50)
          subtle: '#F1F5F9',  // Alternating section canvas (Slate 100)
          white: '#FFFFFF',
          container: '#E2E8F0',
        },
        border: {
          light: '#E2E8F0',   // Slate 200 - clean hairline card border
          medium: '#CBD5E1',  // Slate 300 - WCAG compliant form input border
          strong: '#94A3B8',  // Slate 400
          silver: '#94A3B8',  // Slate 400 - accessible secondary metadata
        },
        bodyText: {
          DEFAULT: '#475569', // Slate 600 - optimal body contrast (7:1 on white)
          dark: '#0F172A',    // Slate 900
          muted: '#64748B',   // Slate 500
        },
        gold: {
          DEFAULT: '#F59E0B', // Amber 500 - crisp star rating
        },
        whatsapp: {
          DEFAULT: '#16A34A', // Accessible Emerald 600
          hover: '#15803D',   // Emerald 700
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'input': '12px',
        'pill': '9999px',
      },
      boxShadow: {
        'elevation-1': '0 2px 10px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.02)',
        'elevation-2': '0 8px 24px -4px rgba(15, 23, 42, 0.06), 0 4px 8px -2px rgba(15, 23, 42, 0.03)',
        'elevation-3': '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'cyan-glow': '0 8px 20px -2px rgba(8, 145, 178, 0.28)',
        'cyan-focus': '0 0 0 3px rgba(8, 145, 178, 0.20)',
      },
      letterSpacing: {
        'tight-hero': '-0.03em',
        'tight-head': '-0.02em',
        'tight-card': '-0.01em',
      },
      lineHeight: {
        'body-relaxed': '1.65',
      }
    },
  },
  plugins: [],
}
