// Colors
export const colors = {
  primary: '#f78800',
  primaryHover: '#e67a00',
  purple: '#6B46C1',
  purpleLight: '#F3F0FF',
  text: {
    primary: '#1a1a1a',
    secondary: '#666666',
    light: '#ffffff'
  },
  background: {
    light: '#ffffff',
    offset: '#f9fafb',
    dark: '#000000'
  }
} as const;

// Spacing
export const spacing = {
  section: {
    py: 'py-24',
    container: 'container mx-auto px-4'
  },
  stack: {
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12'
  },
  grid: {
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
    xl: 'gap-16'
  }
} as const;

// Typography
export const typography = {
  h1: 'text-5xl md:text-7xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-2xl font-semibold',
  body: 'text-lg text-gray-600 leading-relaxed'
} as const;

// Animation
export const animation = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6
  },
  easing: [0.22, 1, 0.36, 1], // Custom easing curve
  stagger: 0.1,
  threshold: 0.1 // Intersection observer threshold
} as const;