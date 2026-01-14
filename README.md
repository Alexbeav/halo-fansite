# Halo Fansite

A modern, responsive fan website dedicated to the Halo video game series. This project demonstrates contemporary web development best practices, evolving from a basic university assignment into a fully-featured static website.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Version History](#version-history)
- [License](#license)

## Overview

This project started as a simple HTML/CSS website for a university web development course (circa 2013) and has been progressively modernized to showcase current web development standards and best practices.

The site features information about the Halo universe, including:
- **Characters** - Master Chief, Cortana, Sergeant Johnson
- **Equipment** - UNSC weapons like the Assault Rifle, Battle Rifle, and Pistol
- **Locations** - Iconic places like Reach, Earth, and Installation 04

## Features

### User Interface
- **Dark/Light Theme Toggle** - Switch between dark and light modes; preference is saved to localStorage and respects system preferences
- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Card Layouts** - Content presented in visually appealing card components
- **Hero Sections** - Eye-catching landing sections with gradient overlays and call-to-action buttons

### Interactive Elements
- **Mobile Hamburger Menu** - Animated menu toggle for mobile navigation
- **Image Lightbox** - Click on images to view them in a fullscreen modal
- **Scroll Animations** - Elements animate into view as you scroll down the page
- **Scroll-to-Top Button** - Floating button appears when scrolling, allows quick return to top
- **Page Transitions** - Smooth fade transitions between pages

### Design
- **Glassmorphism Effects** - Frosted glass appearance using backdrop-filter
- **CSS Animations** - Smooth hover effects, transitions, and keyframe animations
- **Custom Typography** - System font stack for optimal performance and native feel
- **Consistent Color Scheme** - Cohesive color palette using CSS custom properties

## Project Structure

```
website/
├── assets/
│   └── images/
│       ├── AR.png              # Assault Rifle image
│       ├── BR.png              # Battle Rifle image
│       ├── cortana.png         # Cortana character image
│       ├── john117.png         # Master Chief image
│       ├── Johnson.png         # Sergeant Johnson image
│       ├── Pistol.png          # M6D Pistol image
│       └── reach.jpg           # Planet Reach background
├── css/
│   └── style.css               # Main stylesheet (~1,400 lines)
├── js/
│   └── main.js                 # JavaScript functionality (~200 lines)
├── index.html                  # Home page
├── Characters.html             # Characters page
├── Equipment.html              # Equipment/Weapons page
├── Locations.html              # Locations page
├── README.md                   # This file
├── EDUCATION.md                # Educational documentation
└── .gitignore                  # Git ignore rules
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required - this is a static website

### Running Locally

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Open in browser**
   - Simply double-click `index.html`, or
   - Use a local server for best results:
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js (if http-server is installed)
     npx http-server

     # VS Code Live Server extension
     # Right-click index.html → "Open with Live Server"
     ```

3. **Navigate to** `http://localhost:8000` (if using a local server)

## Pages

### Home (`index.html`)
- Full-screen hero section with animated title
- Statistics section highlighting key numbers
- Interactive timeline of Halo game releases
- Featured cards linking to other sections
- Cortana quote section

### Characters (`Characters.html`)
- Card-based layout for each character
- Character details including callsign, species, and rank
- Badges indicating character type (Spartan-II, AI, Marine)
- External links to Halo wiki for more information

### Equipment (`Equipment.html`)
- Weapon cards with specifications grid
- Details including type, caliber, magazine size, and range
- Hover animations on weapon images

### Locations (`Locations.html`)
- Location cards with background images
- Featured card for Reach spanning full width
- Location metadata (system, population, type)

## Technologies Used

### HTML5
- Semantic elements (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<nav>`)
- Accessibility attributes (`aria-label`, `aria-current`, `aria-expanded`)
- Open Graph meta tags for social sharing
- Responsive images with `loading="lazy"`

### CSS3
- **Custom Properties (Variables)** - For theming and consistency
- **Flexbox** - For component layouts
- **CSS Grid** - For page layouts and card grids
- **Media Queries** - For responsive breakpoints
- **Backdrop Filter** - For glassmorphism effects
- **Transitions & Animations** - For interactive feedback
- **Gradient Backgrounds** - For visual depth

### JavaScript (ES6+)
- **DOM Manipulation** - For interactive elements
- **LocalStorage API** - For persisting user preferences
- **Intersection Observer API** - For scroll-triggered animations
- **Event Delegation** - For efficient event handling
- **IIFE Pattern** - For encapsulation and avoiding global scope pollution

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 88+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 88+ |

**Note:** Older browsers may not support all features (e.g., `backdrop-filter`, CSS custom properties). The site remains functional but with graceful degradation.

## Accessibility

This project follows WCAG 2.1 guidelines:

- **Keyboard Navigation** - All interactive elements are keyboard accessible
- **Skip Links** - "Skip to main content" link for screen reader users
- **ARIA Labels** - Descriptive labels for navigation and interactive elements
- **Focus Indicators** - Visible focus states for keyboard navigation
- **Color Contrast** - Text meets WCAG AA contrast requirements
- **Reduced Motion** - Respects `prefers-reduced-motion` system setting
- **Semantic HTML** - Proper heading hierarchy and landmark regions

## Performance

### Optimizations Implemented
- **No external dependencies** - Pure HTML, CSS, and JavaScript
- **Lazy loading images** - Images load only when entering viewport
- **CSS in single file** - Reduces HTTP requests
- **System font stack** - No web font downloads required
- **Efficient selectors** - CSS selectors optimized for performance
- **Event delegation** - Minimal event listeners

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

## Version History

### v3.0 - Full Modernization (Current)
- Complete visual redesign with card-based layouts
- Dark/light theme support
- JavaScript interactivity (hamburger menu, lightbox, animations)
- Reorganized file structure

### v2.0 - Best Practices Update
- Semantic HTML5 elements
- CSS Flexbox layout
- Responsive design
- Accessibility improvements
- Bug fixes

### v1.0 - Original University Project
- Basic HTML/CSS website
- Table-based layouts
- Fixed-width design
- Inline styles

## Contributing

This is an educational project. Feel free to fork and experiment!

## License

This is a fan-made project for educational purposes. Halo and all related content are registered trademarks of Microsoft Corporation.

---

**Built with care by a Halo fan** | [View on GitHub](#)
