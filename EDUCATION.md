# Web Development Education Guide

This document provides an in-depth look at the web development concepts, techniques, and best practices demonstrated in this project. Whether you're a beginner or looking to modernize your skills, this guide will help you understand the "why" behind every implementation choice.

## Table of Contents

1. [HTML Fundamentals](#1-html-fundamentals)
2. [CSS Modern Techniques](#2-css-modern-techniques)
3. [JavaScript Essentials](#3-javascript-essentials)
4. [Responsive Design](#4-responsive-design)
5. [Accessibility (A11y)](#5-accessibility-a11y)
6. [Performance Optimization](#6-performance-optimization)
7. [Project Organization](#7-project-organization)
8. [Version Control with Git](#8-version-control-with-git)
9. [Docker Containerization](#9-docker-containerization)
10. [CI/CD with GitHub Actions](#10-cicd-with-github-actions)
11. [Common Mistakes to Avoid](#11-common-mistakes-to-avoid)
12. [Further Learning Resources](#12-further-learning-resources)

---

## 1. HTML Fundamentals

### 1.1 Document Structure

Every HTML document should follow this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Page Title</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Content goes here -->
    <script src="js/main.js"></script>
</body>
</html>
```

**Key Points:**
- `<!DOCTYPE html>` - Tells browsers to use HTML5 standards mode
- `lang="en"` - Helps screen readers pronounce content correctly
- `charset="UTF-8"` - Supports international characters
- `viewport` meta tag - Essential for responsive design
- CSS in `<head>`, JavaScript before `</body>` - Optimal loading order

### 1.2 Semantic HTML5 Elements

Semantic elements describe their meaning to both browsers and developers:

| Element | Purpose | Example |
|---------|---------|---------|
| `<header>` | Introductory content, navigation | Site header, article header |
| `<nav>` | Navigation links | Main menu, breadcrumbs |
| `<main>` | Primary content (one per page) | Main article, app content |
| `<article>` | Self-contained content | Blog post, product card |
| `<section>` | Thematic grouping | Chapter, tab panel |
| `<aside>` | Tangentially related content | Sidebar, pull quotes |
| `<footer>` | Footer content | Copyright, related links |

**Why Semantic HTML Matters:**
1. **Accessibility** - Screen readers use these to navigate
2. **SEO** - Search engines understand content structure
3. **Maintainability** - Code is self-documenting
4. **Styling** - Provides natural hooks for CSS

**Before (Non-Semantic):**
```html
<div class="header">
    <div class="nav">...</div>
</div>
<div class="main">
    <div class="article">...</div>
</div>
```

**After (Semantic):**
```html
<header>
    <nav>...</nav>
</header>
<main>
    <article>...</article>
</main>
```

### 1.3 Meta Tags for SEO and Social Sharing

```html
<!-- Basic SEO -->
<meta name="description" content="A fan site dedicated to the Halo video game series.">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:title" content="Halo Fansite">
<meta property="og:description" content="Explore the Halo universe.">
<meta property="og:image" content="assets/images/preview.jpg">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Halo Fansite">
```

### 1.4 Proper Image Usage

```html
<!-- Basic image with alt text -->
<img src="image.jpg" alt="Descriptive text for accessibility">

<!-- Lazy loading (loads when visible) -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Responsive images (different sizes for different screens) -->
<img src="small.jpg"
     srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
     alt="Description">
```

**Alt Text Best Practices:**
- Be descriptive but concise
- Don't start with "Image of..." or "Picture of..."
- For decorative images, use `alt=""`
- For complex images, consider `aria-describedby`

---

## 2. CSS Modern Techniques

### 2.1 CSS Custom Properties (Variables)

Custom properties allow you to define reusable values:

```css
:root {
    /* Colors */
    --color-primary: #00d4ff;
    --color-text: #ffffff;
    --color-background: #0a0a0f;

    /* Spacing */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;

    /* Typography */
    --font-size-base: 1rem;
    --font-family: 'Segoe UI', system-ui, sans-serif;
}

/* Usage */
.button {
    background: var(--color-primary);
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
}
```

**Benefits:**
- Single source of truth for values
- Easy theming (change one variable, update everywhere)
- Can be modified with JavaScript
- Cascade and inherit like other CSS properties

### 2.2 Theming with CSS Variables

```css
/* Dark theme (default) */
:root,
[data-theme="dark"] {
    --color-background: #0a0a0f;
    --color-text: #ffffff;
}

/* Light theme */
[data-theme="light"] {
    --color-background: #f0f4f8;
    --color-text: #1a1a2e;
}

/* Components automatically use the right colors */
body {
    background-color: var(--color-background);
    color: var(--color-text);
}
```

**JavaScript to toggle:**
```javascript
document.documentElement.setAttribute('data-theme', 'light');
```

### 2.3 Flexbox Layout

Flexbox is ideal for one-dimensional layouts (row OR column):

```css
/* Container */
.flex-container {
    display: flex;
    flex-direction: row;        /* row | column */
    justify-content: center;    /* Main axis alignment */
    align-items: center;        /* Cross axis alignment */
    gap: 1rem;                  /* Space between items */
    flex-wrap: wrap;            /* Allow wrapping */
}

/* Items */
.flex-item {
    flex: 1;                    /* Grow to fill space */
    /* Or more specifically: */
    flex-grow: 1;               /* How much to grow */
    flex-shrink: 0;             /* How much to shrink */
    flex-basis: 200px;          /* Starting size */
}
```

**Common Flexbox Patterns:**

```css
/* Center anything */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Space between items */
.space-between {
    display: flex;
    justify-content: space-between;
}

/* Navigation bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### 2.4 CSS Grid Layout

Grid is ideal for two-dimensional layouts (rows AND columns):

```css
/* Basic grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    grid-template-rows: auto;
    gap: 2rem;
}

/* Responsive grid (auto-fit) */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Named grid areas */
.page-layout {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 250px 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### 2.5 Flexbox vs Grid: When to Use Which

| Use Flexbox When... | Use Grid When... |
|---------------------|------------------|
| Content size determines layout | Layout determines content size |
| One direction (row or column) | Two directions (rows and columns) |
| Aligning items in a container | Creating page layouts |
| Navigation bars | Card grids |
| Centering content | Complex layouts |

### 2.6 Modern CSS Effects

**Glassmorphism:**
```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
}
```

**Smooth Transitions:**
```css
.button {
    transition: all 0.3s ease;
    /* Or be specific: */
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
    background-color: var(--color-primary);
    transform: translateY(-2px);
}
```

**Keyframe Animations:**
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.element {
    animation: fadeIn 0.5s ease forwards;
}
```

**Box Shadows for Depth:**
```css
.card {
    /* offset-x | offset-y | blur | spread | color */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Glowing effect */
.glow {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

/* Multiple shadows */
.layered {
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 8px 16px rgba(0, 0, 0, 0.1);
}
```

---

## 3. JavaScript Essentials

### 3.1 Modern JavaScript (ES6+)

**Arrow Functions:**
```javascript
// Traditional
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With body
const greet = (name) => {
    const message = `Hello, ${name}!`;
    return message;
};
```

**Template Literals:**
```javascript
const name = 'Spartan';
const greeting = `Welcome, ${name}!`;  // String interpolation

// Multi-line strings
const html = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
    </div>
`;
```

**Destructuring:**
```javascript
// Object destructuring
const { name, age } = person;

// Array destructuring
const [first, second] = array;

// Function parameters
const greet = ({ name, title }) => {
    console.log(`${title} ${name}`);
};
```

**Spread Operator:**
```javascript
// Arrays
const combined = [...array1, ...array2];

// Objects
const updated = { ...original, newProperty: 'value' };
```

### 3.2 DOM Manipulation

**Selecting Elements:**
```javascript
// Single element
const element = document.getElementById('myId');
const element = document.querySelector('.myClass');

// Multiple elements
const elements = document.querySelectorAll('.cards');
```

**Modifying Elements:**
```javascript
// Classes
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active');  // Returns boolean

// Attributes
element.setAttribute('data-theme', 'dark');
element.getAttribute('data-theme');
element.removeAttribute('data-theme');

// Content
element.textContent = 'New text';
element.innerHTML = '<strong>HTML content</strong>';

// Styles
element.style.backgroundColor = 'blue';
element.style.setProperty('--custom-var', 'value');
```

### 3.3 Event Handling

**Basic Events:**
```javascript
button.addEventListener('click', (event) => {
    console.log('Button clicked!');
    console.log(event.target);  // The clicked element
});

// Remove listener
button.removeEventListener('click', handlerFunction);
```

**Event Delegation:**
```javascript
// Instead of adding listeners to many elements...
// Add one listener to the parent
document.querySelector('.card-container').addEventListener('click', (e) => {
    // Check if a card was clicked
    if (e.target.closest('.card')) {
        const card = e.target.closest('.card');
        console.log('Card clicked:', card);
    }
});
```

**Common Events:**
- `click` - Mouse click
- `submit` - Form submission
- `keydown` / `keyup` - Keyboard events
- `scroll` - Page scroll
- `resize` - Window resize
- `DOMContentLoaded` - DOM ready
- `load` - Page fully loaded

### 3.4 Local Storage

```javascript
// Save data
localStorage.setItem('theme', 'dark');
localStorage.setItem('user', JSON.stringify({ name: 'John' }));

// Retrieve data
const theme = localStorage.getItem('theme');
const user = JSON.parse(localStorage.getItem('user'));

// Remove data
localStorage.removeItem('theme');

// Clear all
localStorage.clear();
```

### 3.5 Intersection Observer (Scroll Animations)

The Intersection Observer API efficiently detects when elements enter the viewport:

```javascript
// Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is visible
            entry.target.classList.add('visible');

            // Optional: Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,      // Trigger when 10% visible
    rootMargin: '0px'    // Margin around viewport
});

// Observe elements
document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
});
```

### 3.6 IIFE Pattern (Immediately Invoked Function Expression)

Wrapping code in an IIFE prevents polluting the global scope:

```javascript
(function() {
    'use strict';

    // All variables and functions are private
    const privateVar = 'hidden';

    function privateFunction() {
        // ...
    }

    // Initialize
    function init() {
        // Setup code
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
```

---

## 4. Responsive Design

### 4.1 Mobile-First Approach

Write CSS for mobile first, then add complexity for larger screens:

```css
/* Mobile styles (default) */
.container {
    padding: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;  /* Single column */
    gap: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }

    .grid {
        grid-template-columns: repeat(2, 1fr);  /* Two columns */
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);  /* Three columns */
    }
}
```

### 4.2 Common Breakpoints

```css
/* Mobile phones */
@media (max-width: 480px) { }

/* Tablets */
@media (min-width: 481px) and (max-width: 768px) { }

/* Small laptops */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktops */
@media (min-width: 1025px) { }

/* Large screens */
@media (min-width: 1440px) { }
```

### 4.3 Responsive Typography

```css
/* Using clamp() for fluid typography */
h1 {
    /* clamp(minimum, preferred, maximum) */
    font-size: clamp(2rem, 5vw, 4rem);
}

/* Responsive with media queries */
body {
    font-size: 16px;
}

@media (min-width: 768px) {
    body {
        font-size: 18px;
    }
}
```

### 4.4 Responsive Images

```css
/* Make images responsive */
img {
    max-width: 100%;
    height: auto;
}

/* Object-fit for consistent sizing */
.card-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;  /* Crop to fill */
    /* or: object-fit: contain; - Fit within */
}
```

### 4.5 Mobile Navigation Pattern

```css
/* Desktop: horizontal nav */
.nav ul {
    display: flex;
    gap: 1rem;
}

/* Mobile: hide nav, show hamburger */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        height: 100vh;
        transition: right 0.3s ease;
    }

    .nav.is-open {
        right: 0;
    }

    .nav ul {
        flex-direction: column;
    }
}
```

---

## 5. Accessibility (A11y)

### 5.1 Why Accessibility Matters

- **Legal requirement** in many countries
- **15%+ of people** have some form of disability
- **Better SEO** - search engines read like screen readers
- **Better UX** - helps everyone (keyboard users, slow connections, etc.)

### 5.2 Semantic HTML for Accessibility

Screen readers use HTML structure to navigate. Use semantic elements:

```html
<!-- Good -->
<button onclick="submit()">Submit</button>
<a href="/about">About Us</a>

<!-- Bad (inaccessible) -->
<div onclick="submit()">Submit</div>
<span onclick="navigate()">About Us</span>
```

### 5.3 ARIA Attributes

ARIA (Accessible Rich Internet Applications) enhances accessibility:

```html
<!-- Labels -->
<nav aria-label="Main navigation">
<button aria-label="Close menu">×</button>

<!-- States -->
<button aria-expanded="false">Menu</button>
<a href="/" aria-current="page">Home</a>

<!-- Descriptions -->
<input aria-describedby="password-help">
<p id="password-help">Must be at least 8 characters</p>

<!-- Live regions (announce changes) -->
<div aria-live="polite">Status: Loading...</div>
```

### 5.4 Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```css
/* Visible focus states */
:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* Don't remove focus outline! Instead, style it nicely */
button:focus {
    outline: none;  /* Bad! */
}

button:focus-visible {
    outline: 2px solid blue;  /* Good - only shows for keyboard */
}
```

```javascript
// Handle Escape key to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
```

### 5.5 Skip Links

Allow keyboard users to skip repetitive content:

```html
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header><!-- Navigation --></header>
    <main id="main-content">
        <!-- Main content -->
    </main>
</body>
```

```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    padding: 8px 16px;
    background: #000;
    color: #fff;
    z-index: 100;
}

.skip-link:focus {
    top: 0;
}
```

### 5.6 Color Contrast

Ensure sufficient contrast between text and background:

- **Normal text:** Minimum 4.5:1 ratio
- **Large text (18px+ bold or 24px+):** Minimum 3:1 ratio

Tools to check contrast:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools → Rendering → Emulate vision deficiencies

### 5.7 Reduced Motion

Respect users who prefer reduced motion:

```css
/* Default animations */
.element {
    animation: fadeIn 0.5s ease;
    transition: transform 0.3s ease;
}

/* Disable for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 6. Performance Optimization

### 6.1 Critical Rendering Path

The browser renders pages in this order:
1. Parse HTML → Build DOM
2. Parse CSS → Build CSSOM
3. Combine DOM + CSSOM → Render Tree
4. Layout (calculate positions)
5. Paint (draw pixels)

**Optimization tips:**
- Put CSS in `<head>` (render-blocking is intentional)
- Put JS before `</body>` or use `defer`
- Minimize render-blocking resources

### 6.2 Efficient CSS

```css
/* Avoid deep nesting (slower) */
.header .nav .list .item .link { }

/* Prefer direct selectors (faster) */
.nav-link { }

/* Avoid universal selector */
* { }  /* Bad */

/* Use classes instead of complex selectors */
div.container > ul > li:nth-child(odd) { }  /* Bad */
.list-item-odd { }  /* Good */
```

### 6.3 Image Optimization

1. **Choose the right format:**
   - JPEG: Photos
   - PNG: Graphics with transparency
   - WebP: Modern format, smaller files
   - SVG: Icons, logos (scalable)

2. **Lazy loading:**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

3. **Responsive images:**
   ```html
   <img src="small.jpg"
        srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
        sizes="(max-width: 600px) 400px, 800px"
        alt="Description">
   ```

### 6.4 Minimize Reflows and Repaints

**Reflow** (expensive): Changes to layout
**Repaint** (cheaper): Changes to appearance

```javascript
// Bad: Multiple reflows
element.style.width = '100px';
element.style.height = '100px';
element.style.margin = '10px';

// Good: Batch changes with class
element.classList.add('expanded');

// Or use documentFragment for multiple DOM insertions
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
});
list.appendChild(fragment);  // Single reflow
```

### 6.5 Preloading Critical Assets

```html
<!-- Preload critical CSS -->
<link rel="preload" href="css/style.css" as="style">

<!-- Preload critical JavaScript -->
<link rel="preload" href="js/main.js" as="script">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
```

---

## 7. Project Organization

### 7.1 File Structure

```
project/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
├── about.html
├── README.md
└── .gitignore
```

### 7.2 CSS Organization

Structure your CSS logically:

```css
/* ==========================================================================
   1. Variables / Custom Properties
   ========================================================================== */

/* ==========================================================================
   2. Reset / Base Styles
   ========================================================================== */

/* ==========================================================================
   3. Typography
   ========================================================================== */

/* ==========================================================================
   4. Layout Components
   ========================================================================== */

/* ==========================================================================
   5. UI Components (buttons, cards, etc.)
   ========================================================================== */

/* ==========================================================================
   6. Page-Specific Styles
   ========================================================================== */

/* ==========================================================================
   7. Utility Classes
   ========================================================================== */

/* ==========================================================================
   8. Media Queries
   ========================================================================== */
```

### 7.3 Naming Conventions

**BEM (Block Element Modifier):**
```css
/* Block */
.card { }

/* Element (part of block) */
.card__title { }
.card__image { }
.card__body { }

/* Modifier (variation) */
.card--featured { }
.card--large { }
```

**Benefits:**
- Self-documenting
- Avoids specificity issues
- Clear relationship between elements

---

## 8. Version Control with Git

### 8.1 Basic Git Commands

```bash
# Initialize repository
git init

# Check status
git status

# Stage files
git add filename.html
git add .  # All files

# Commit changes
git commit -m "Add feature description"

# View history
git log
git log --oneline

# Create branch
git branch feature-name
git checkout -b feature-name  # Create and switch

# Switch branches
git checkout main

# Merge branch
git merge feature-name

# View differences
git diff
git diff --staged
```

### 8.2 Good Commit Messages

```
# Format
<type>: <subject>

<body>

# Examples
feat: Add dark mode toggle

Implement dark/light theme switching with localStorage persistence.
Respects system preference using prefers-color-scheme.

fix: Correct navigation alignment on mobile

chore: Update dependencies

docs: Add README and EDUCATION files
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (not CSS)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### 8.3 .gitignore

```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/

# Editor files
.vscode/
.idea/
*.swp

# OS files
.DS_Store
Thumbs.db

# Environment files
.env
.env.local

# Logs
*.log
```

---

## 9. Docker Containerization

Docker allows you to package your application with all its dependencies into a standardized unit called a container. This ensures your application runs the same way everywhere.

### 9.1 What is Docker?

Docker solves the "it works on my machine" problem by creating isolated environments:

```
Traditional Deployment:
[Your Code] → [Server with different OS/configs] → Problems!

Docker Deployment:
[Your Code + Dependencies + Config] → [Any Server with Docker] → Works!
```

**Key Concepts:**
- **Image** - A blueprint/template for containers (like a class)
- **Container** - A running instance of an image (like an object)
- **Dockerfile** - Instructions to build an image
- **Registry** - Storage for images (Docker Hub, GHCR)

### 9.2 Dockerfile Basics

A Dockerfile contains instructions to build your image:

```dockerfile
# Start from a base image
FROM nginx:alpine

# Copy configuration files
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy application files
COPY assets/ /usr/share/nginx/html/assets/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY *.html /usr/share/nginx/html/

# Set permissions
RUN chmod -R 755 /usr/share/nginx/html

# Document the port the container listens on
EXPOSE 80

# Command to run when container starts
CMD ["nginx", "-g", "daemon off;"]
```

**Common Instructions:**

| Instruction | Purpose | Example |
|-------------|---------|---------|
| `FROM` | Base image to build upon | `FROM node:18-alpine` |
| `COPY` | Copy files from host to image | `COPY . /app` |
| `RUN` | Execute commands during build | `RUN npm install` |
| `WORKDIR` | Set working directory | `WORKDIR /app` |
| `EXPOSE` | Document which ports to expose | `EXPOSE 3000` |
| `CMD` | Default command when container runs | `CMD ["npm", "start"]` |
| `ENV` | Set environment variables | `ENV NODE_ENV=production` |

### 9.3 Building and Running Containers

```bash
# Build an image from Dockerfile
docker build -t my-app:latest .

# List images
docker images

# Run a container
docker run -d -p 8080:80 --name my-container my-app:latest
#          │  │         │                     │
#          │  │         │                     └── Image to use
#          │  │         └── Container name
#          │  └── Port mapping (host:container)
#          └── Detached mode (run in background)

# List running containers
docker ps

# View container logs
docker logs my-container

# Stop a container
docker stop my-container

# Remove a container
docker rm my-container

# Remove an image
docker rmi my-app:latest
```

### 9.4 Docker Compose

Docker Compose simplifies multi-container applications with a YAML file:

```yaml
version: '3.8'

services:
  web:
    build: .
    container_name: my-web-app
    ports:
      - "8080:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    volumes:
      - ./logs:/var/log/nginx

  database:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

**Docker Compose Commands:**

```bash
# Start services (build if needed)
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Scale services
docker-compose up -d --scale web=3
```

### 9.5 .dockerignore File

Like `.gitignore`, this excludes files from the build context:

```dockerignore
# Version control
.git
.gitignore

# Documentation
*.md

# Development files
.vscode
.idea
node_modules

# Docker files (don't copy into image)
Dockerfile
docker-compose.yml
.dockerignore

# Secrets and environment
.env
*.pem
```

**Why use .dockerignore?**
- Speeds up builds (less data to send)
- Reduces image size
- Prevents sensitive files from being included

### 9.6 Best Practices

**1. Use Small Base Images:**
```dockerfile
# Good - Alpine is ~5MB
FROM nginx:alpine

# Avoid - Full Ubuntu is ~70MB+
FROM ubuntu:latest
```

**2. Layer Caching - Order Matters:**
```dockerfile
# Good - dependencies change less often than code
COPY package.json .
RUN npm install
COPY . .

# Bad - cache invalidated on any file change
COPY . .
RUN npm install
```

**3. Multi-Stage Builds (for compiled apps):**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage - only runtime needed
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

**4. Don't Run as Root:**
```dockerfile
RUN adduser -D appuser
USER appuser
```

---

## 10. CI/CD with GitHub Actions

CI/CD (Continuous Integration/Continuous Deployment) automates testing and deployment of your code.

### 10.1 What is CI/CD?

**Continuous Integration (CI):**
- Automatically test code when pushed
- Catch bugs early
- Ensure code quality

**Continuous Deployment (CD):**
- Automatically deploy tested code
- Reduce manual deployment errors
- Ship features faster

```
Developer pushes code
        ↓
CI: Run tests, lint, build
        ↓
    Tests pass?
    ↓       ↓
   No      Yes
    ↓       ↓
 Fix it   CD: Deploy to production
```

### 10.2 GitHub Actions Basics

Workflows are defined in `.github/workflows/*.yml`:

```yaml
name: CI Pipeline

# When to run
on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main]

# Jobs to execute
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
```

### 10.3 Key Concepts

**Triggers (`on`):**
```yaml
on:
  # Push to specific branches
  push:
    branches: [main]
    paths:
      - 'src/**'        # Only when src changes

  # Pull requests
  pull_request:
    branches: [main]

  # Scheduled (cron)
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight

  # Manual trigger
  workflow_dispatch:

  # On release
  release:
    types: [published]
```

**Jobs and Steps:**
```yaml
jobs:
  test:
    runs-on: ubuntu-latest    # Runner OS
    steps:
      - name: Step description
        uses: action/name@v1   # Use pre-built action
        with:
          parameter: value

      - name: Run command
        run: npm test          # Run shell command

  deploy:
    needs: test               # Wait for test job
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying..."
```

**Environment Variables and Secrets:**
```yaml
env:
  NODE_ENV: production

jobs:
  deploy:
    steps:
      - name: Deploy
        env:
          API_KEY: ${{ secrets.API_KEY }}
        run: ./deploy.sh
```

### 10.4 Common Actions

**Checkout Code:**
```yaml
- uses: actions/checkout@v4
```

**Setup Languages:**
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'npm'

- uses: actions/setup-python@v5
  with:
    python-version: '3.11'
```

**Caching:**
```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
```

**Upload Artifacts:**
```yaml
- uses: actions/upload-artifact@v4
  with:
    name: build-output
    path: dist/
```

### 10.5 Deploying to GitHub Pages

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Build
        run: |
          mkdir -p _site
          cp -r css js assets *.html _site/

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

### 10.6 Building Docker Images

```yaml
name: Build Docker Image

on:
  push:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - name: Setup Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=ref,event=branch
            type=sha
            type=raw,value=latest

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

### 10.7 Workflow Best Practices

**1. Use Specific Action Versions:**
```yaml
# Good - pinned to major version
uses: actions/checkout@v4

# Risky - always latest
uses: actions/checkout@main
```

**2. Fail Fast:**
```yaml
jobs:
  test:
    strategy:
      fail-fast: true
      matrix:
        node: [18, 20, 22]
```

**3. Concurrency Control:**
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

**4. Reusable Workflows:**
```yaml
# .github/workflows/reusable-test.yml
on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ inputs.node-version }}
      - run: npm test
```

```yaml
# Usage in another workflow
jobs:
  call-tests:
    uses: ./.github/workflows/reusable-test.yml
    with:
      node-version: '20'
```

**5. Status Badges:**
Add badges to your README to show workflow status:
```markdown
[![CI](https://github.com/USER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/USER/REPO/actions/workflows/ci.yml)
```

---

## 11. Common Mistakes to Avoid

### 11.1 HTML Mistakes

```html
<!-- Missing alt text -->
<img src="photo.jpg">  <!-- Bad -->
<img src="photo.jpg" alt="Team photo from 2023">  <!-- Good -->

<!-- Using divs for everything -->
<div class="button" onclick="...">Click</div>  <!-- Bad -->
<button onclick="...">Click</button>  <!-- Good -->

<!-- Incorrect heading hierarchy -->
<h1>Title</h1>
<h3>Subtitle</h3>  <!-- Bad: skipped h2 -->
<h2>Subtitle</h2>  <!-- Good -->

<!-- Empty links -->
<a href="#">Click here</a>  <!-- Bad -->
<a href="/about">Learn more about us</a>  <!-- Good -->
```

### 11.2 CSS Mistakes

```css
/* Using IDs for styling (too specific) */
#header { }  /* Bad */
.header { }  /* Good */

/* Using !important */
.button { color: red !important; }  /* Bad */

/* Magic numbers */
.element { margin-top: 37px; }  /* Bad */
.element { margin-top: var(--spacing-lg); }  /* Good */

/* Not using shorthand appropriately */
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 10px;  /* Bad */
margin: 10px;  /* Good */
```

### 11.3 JavaScript Mistakes

```javascript
// Using var instead of let/const
var name = 'John';  // Bad
const name = 'John';  // Good

// Not handling errors
fetch('/api/data');  // Bad
fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error(error));  // Good

// Inline event handlers
<button onclick="handleClick()">  // Bad
button.addEventListener('click', handleClick);  // Good

// Blocking the main thread
while (condition) { }  // Bad - freezes the page
```

---

## 12. Further Learning Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web documentation
- [CSS-Tricks](https://css-tricks.com/) - CSS tutorials and guides
- [Web.dev](https://web.dev/) - Google's web development guidance

### Interactive Learning
- [freeCodeCamp](https://www.freecodecamp.org/) - Free coding curriculum
- [Codecademy](https://www.codecademy.com/) - Interactive courses
- [Frontend Mentor](https://www.frontendmentor.io/) - Real-world projects

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility tables
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Browser debugging
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing

### CSS Specific
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Learn CSS Grid
- [CSS Battle](https://cssbattle.dev/) - CSS challenges

### Accessibility
- [WebAIM](https://webaim.org/) - Web accessibility resources
- [A11y Project](https://www.a11yproject.com/) - Accessibility patterns
- [WAVE Tool](https://wave.webaim.org/) - Accessibility evaluation

### Docker & Containers
- [Docker Documentation](https://docs.docker.com/) - Official Docker docs
- [Docker Hub](https://hub.docker.com/) - Container image registry
- [Play with Docker](https://labs.play-with-docker.com/) - Interactive Docker playground
- [Docker Curriculum](https://docker-curriculum.com/) - Beginner-friendly tutorial

### CI/CD & DevOps
- [GitHub Actions Docs](https://docs.github.com/en/actions) - Official GitHub Actions documentation
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions) - Pre-built actions
- [DevOps Roadmap](https://roadmap.sh/devops) - Learning path for DevOps
- [The Twelve-Factor App](https://12factor.net/) - Best practices for modern apps

---

## Conclusion

Web development is a constantly evolving field. The techniques covered in this project represent modern best practices as of 2024-2025, but always stay curious and keep learning. The fundamentals—semantic HTML, clean CSS, accessible interfaces, performant code, containerization, and automated deployment—will serve you well regardless of what frameworks or tools become popular.

Remember:
- **Write for humans first** - Clean, readable code is maintainable code
- **Progressive enhancement** - Build a solid foundation, then add features
- **Test on real devices** - Emulators are helpful but not perfect
- **Accessibility is not optional** - It's part of good web development
- **Performance matters** - Users won't wait for slow sites
- **Automate everything** - CI/CD reduces errors and speeds up delivery
- **Containerize for consistency** - Docker ensures your app runs the same everywhere

Happy coding!
