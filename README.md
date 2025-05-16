# Portfolio Application Documentation

## Overview
This is a modern portfolio application built with React, TypeScript, and TailwindCSS. It features a responsive design with dark/light theme support and showcases professional projects and skills.

## Tech Stack
- **Frontend Framework**: React
- **Styling**: TailwindCSS
- **UI Components**: Shadcn
- **Build Tool**: Vite
- **Theme Management**: Custom theme provider
- **Icons**: Custom icon components

## Project Structure
```
src/
├── assets/         # Static assets
├── components/     # React components
├── hooks/         # Custom React hooks
├── icons/         # Icon components
├── lib/           # Utility libraries
├── utils/         # Helper functions
└── data.js        # Project data
```

## Core Components

### Navigation
- **Navbar.jsx**: Main navigation component with responsive design
- **MobileNavbar.jsx**: Mobile-specific navigation
- **NewNavbar.jsx**: Updated navigation implementation
- **ThemeToggle.jsx**: Dark/Light theme switcher

### Main Sections
- **Hero.jsx**: Landing section with introduction
- **AboutMe.jsx**: Personal information and skills
- **Projects.jsx**: Project showcase section
- **ProjectCard.jsx**: Individual project display component
- **Contact.jsx**: Contact information and form
- **Footer.jsx**: Site footer with links and information

### UI Components
Located in `src/components/ui/` directory, these are reusable UI components built with Shadcn.

## Features

### Theme Support
- Implements dark/light theme switching
- Uses theme-provider.jsx for global theme management
- Persists theme preference

### Responsive Design
- Mobile-first approach
- Responsive navigation
- Adaptive layouts for different screen sizes

### Project Showcase
- Dynamic project cards
- Technology stack display
- Project links and descriptions

### Contact Section
- Contact form
- Social media links
- Professional information

## Styling Guidelines
- Uses TailwindCSS for all styling
- Implements custom color schemes
- Follows modern UI/UX practices
- Maintains consistent spacing and typography

## Best Practices Implemented
- Early returns for better code readability
- Descriptive variable and function naming
- Accessibility features (ARIA labels, keyboard navigation)
- Component-based architecture
- Type safety with TypeScript
- DRY (Don't Repeat Yourself) principle

## Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Configuration Files
- `tailwind.config.js`: TailwindCSS configuration
- `tsconfig.json`: TypeScript configuration
- `vite.config.js`: Vite build configuration
- `components.json`: Shadcn components configuration
- `.prettierrc`: Code formatting rules

## Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Performance Considerations
- Optimized images and assets
- Lazy loading for components
- Efficient state management
- Minimal CSS bundle size through TailwindCSS

