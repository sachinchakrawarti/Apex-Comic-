// Apex_Comic_Frontend/src/config/theme.js
const theme = {
  colors: {
    primary: {
      pink: '#EC4899', // Tailwind's pink-500
      blue: '#3B82F6', // Tailwind's blue-500
      blueLight: '#e0e7ff', // Tailwind's indigo-100
      blueDark: '#3730a3', // Tailwind's indigo-800
      gradient: 'linear-gradient(to right, #EC4899, #3B82F6)',
    },
    secondary: {
      green: '#16a34a', // Tailwind's green-600
      greenDark: '#15803d', // Tailwind's green-700
      purple: '#9333ea', // Tailwind's purple-600
      purpleDark: '#7e22ce', // Tailwind's purple-700
    },
    background: {
      light: '#F3F4F6', // Tailwind's gray-100
      dark: '#111827', // Tailwind's gray-900
      darkTransparent: 'rgba(17, 24, 39, 0.8)',
      darker: 'rgba(31, 41, 55, 0.5)', // gray-800 with transparency
    },
    text: {
      light: '#E5E7EB', // Tailwind's gray-200
      lighter: '#F3F4F6', // Tailwind's gray-100
      dark: '#111827', // Tailwind's gray-900
      secondary: '#6B7280', // Tailwind's gray-500
      highlight: '#3B82F6', // primary blue
      transparent: 'transparent',
    },
    border: {
      default: 'rgba(209, 213, 219, 0.5)', // gray-300 with transparency
      dark: 'rgba(55, 65, 81, 0.5)', // gray-700 with transparency
      pink: 'rgba(236, 72, 153, 0.3)', // pink-500 with transparency
      blue: 'rgba(59, 130, 246, 0.5)', // blue-500 with transparency
    },
  },
  typography: {
    fontFamily: {
      mono: 'monospace',
      sans: 'ui-sans-serif, system-ui, sans-serif',
      serif: 'ui-serif, Georgia, serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: {
      pink: '0 0 10px rgba(236, 72, 153, 0.7)',
      blue: '0 0 15px rgba(59, 130, 246, 0.6)',
      gradient: '0 0 8px rgba(99, 102, 241, 0.8)',
    },
  },
  transitions: {
    none: 'none',
    all: 'all',
    default: 'all 0.3s ease',
    colors: 'background-color, border-color, color, fill, stroke',
    opacity: 'opacity 0.2s ease',
    shadow: 'box-shadow 0.2s ease',
    transform: 'transform 0.3s ease',
    glow: 'all 0.3s ease, box-shadow 0.3s ease',
  },
  effects: {
    backdrop: 'blur(12px)',
    gradientOverlay: 'linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
    glass: 'backdrop-filter: blur(16px) saturate(180%); background-color: rgba(255, 255, 255, 0.1);',
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
};

export default theme;