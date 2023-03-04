export const theme = {
  colors: {
    text: '#EBD8FF',
    textButton: '#373737',
    background: '#ffffff',
    gradientBackground:
      'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
    primaryButton: '#EBD8FF',
    focusButton: '#5CD3A8',
  },

  space: [
    '0px',
    '4px',
    '8px',
    '16px',
    '20px',
    '28px',
    '32px',
    '40px',
    '44px',
    '48px',
    '60px',
    '80px',
    '90px',
  ],

  fonts: {
    body: 'Montserrat, sans-serif',
    special: 'Poppins, monospace',
    monospace: '',
  },

  fontSizes: {
    ms: '18px',
    s: '20px',
    m: '24px',
  },

  fontWeights: {
    normal: 500,
    medium: 600,
  },

  lineHeights: {
    min: 1.2,
    normal: 1.22,
  },

  letterSpacings: {
    min: '-0.01em',
    normal: '0.04em',
    max: '0.07em',
  },

  borders: {
    none: 'none',
  },

  shadows: {
    card: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
    button: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
  },

  radii: {
    none: '0',
    button: '10px',
    card: '20px',
    img: '50%',
  },

  screens: {
    xs: 319, // => no min-width
    mobil: 320,
    // => @media (min-width: 320px) { ... }

    tablet: 768,
    // => @media (min-width: 768px) { ... }

    desktop: 1280,
    // => @media (min-width: 1280px) { ... }
  },
};
