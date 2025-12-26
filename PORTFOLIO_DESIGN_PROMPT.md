# Portfolio Website Design Prompt - Complete Specification

## Overview
A modern, minimalist dark-themed portfolio website for digital designers, graphic designers, and video editors. The site features a two-stage experience: an elegant landing page with infinite scrolling galleries, and a portfolio gallery section with categorized work displays.

---

## Technology Stack
- **Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.0.0
- **Styling**: Inline styles with CSS-in-JS approach
- **Font**: Inter font family (with system font fallbacks)

---

## Design System & Color Palette

### Colors
- **Primary Background**: `#0a0a0a` (near-black)
- **Secondary Background**: `#1a1a1a` (dark gray)
- **Primary Text**: `#ffffff` (white)
- **Secondary Text**: `#999` (medium gray)
- **Tertiary Text**: `#666` (darker gray)
- **Accent Text**: `#cccccc` (light gray)
- **Borders**: `rgba(255, 255, 255, 0.1)` (subtle white with 10% opacity)
- **Hover Borders**: `rgba(255, 255, 255, 0.3)` (30% opacity)
- **Modal Background**: `rgba(0, 0, 0, 0.9)` (90% black overlay)

### Typography
- **Font Family**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`
- **Font Weights**: 300 (light), 400 (regular)
- **Letter Spacing**: 
  - Headings: `-0.03em` to `-0.02em` (tight)
  - Uppercase text: `0.1em` to `0.05em` (spaced)
- **Text Transform**: Uppercase for labels, sections, and buttons

### Spacing & Layout
- **Border Radius**: 
  - Buttons and cards: `999px` (pill-shaped)
  - Containers and modals: `16px`
- **Gaps**: `0.5rem` to `1.5rem` (8px to 24px)
- **Padding**: `1rem` to `4rem` (16px to 64px)
- **Max Width**: `1400px` for main content containers
- **Max Width**: `800px` for landing page content

---

## Visual Effects & Animations

### Canvas Grid Background
- **Implementation**: HTML5 Canvas with fixed grid pattern
- **Grid Properties**:
  - Grid size: `60px` fixed
  - Spot size: `250px` fixed
  - Line opacity: `0.03` (3% white)
  - Line width: `1px`
  - Number of spots: 4-6 randomly positioned
- **Behavior**: 
  - Grid spots are generated once and remain fixed
  - Canvas resizes with window
  - Subtle cursor interaction: radial gradient follows mouse (150px radius, 2% opacity at center)
- **Performance**: Uses `requestAnimationFrame` for smooth rendering

### Animations
- **fadeIn**: Opacity 0 to 1
- **slideUp**: Opacity 0 to 1, translateY(20px) to translateY(0)
- **scrollLeft**: Infinite horizontal scroll left (translateX(0) to translateX(-50%))
- **scrollRight**: Infinite horizontal scroll right (translateX(-50%) to translateX(0))
- **Animation Duration**: 0.2s to 0.8s with ease-out timing
- **Staggered Delays**: 0.1s increments for sequential elements

### Hover Effects
- **Buttons**: Background color inversion, border color change, opacity changes
- **Cards**: `translateY(-4px)` lift effect, border color brightening
- **Links**: Color change from gray to white
- **Software Badges**: Border color change, shadow enhancement, slight lift
- **Transitions**: All hover effects use `0.2s` to `0.3s` ease transitions

---

## Page Structure

### 1. Landing Page (`Landing.tsx`)

#### Layout Structure
- Full viewport height (`100vh`)
- Flexbox column layout with space-between justification
- Centered content with max-width constraints
- Canvas background layer (z-index: 0)
- Content layer (z-index: 1)

#### Header Section
- **Studio Name** (H1):
  - Font size: `clamp(3rem, 8vw, 6rem)` (responsive)
  - Font weight: 300
  - Color: `#ffffff`
  - Letter spacing: `-0.03em`
  - Margin bottom: `0.5rem`
  - Animation: `slideUp 0.8s ease-out 0.1s both`

- **Personal Name** (H2):
  - Font size: `clamp(1.2rem, 3vw, 1.8rem)`
  - Font weight: 400
  - Color: `#999`
  - Letter spacing: `0.1em`
  - Text transform: uppercase
  - Margin bottom: `3rem`
  - Animation: `slideUp 0.8s ease-out 0.2s both`

- **Tagline** (P):
  - Font size: `clamp(1rem, 2.5vw, 1.3rem)`
  - Color: `#cccccc`
  - Line height: 1.8
  - Font weight: 300
  - Margin bottom: `1rem`
  - Animation: `slideUp 0.8s ease-out 0.3s both`

- **Subtagline** (P):
  - Font size: `clamp(0.9rem, 2vw, 1.1rem)`
  - Font style: italic
  - Font weight: 300
  - Gradient text: `linear-gradient(135deg, #ffffff 0%, #cccccc 50%, #999999 100%)`
  - Uses `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`
  - Margin bottom: `4rem`
  - Animation: `slideUp 0.8s ease-out 0.4s both`

#### Enter Portfolio Button
- Padding: `1rem 2.5rem`
- Font size: `0.95rem`
- Font weight: 400
- Color: `#ffffff`
- Background: transparent
- Border: `1px solid #ffffff`
- Border radius: `999px`
- Letter spacing: `0.1em`
- Text transform: uppercase
- Margin bottom: `4rem`
- Animation: `slideUp 0.8s ease-out 0.5s both`
- Hover: Background becomes white, text becomes `#0a0a0a`

#### Software Tools Section
- **Heading**: "What I can use:"
  - Font size: `0.9rem`
  - Font weight: 400
  - Color: `#aaaaaa`
  - Letter spacing: `0.1em`
  - Text transform: uppercase
  - Margin bottom: `1.5rem`

- **Software Badges**:
  - Display: flex with wrap
  - Gap: `0.75rem`
  - Each badge contains:
    - Icon (24px × 24px, object-fit: contain)
    - Text label
  - Badge styling:
    - Background: `#1a1a1a`
    - Border: `1px solid rgba(255, 255, 255, 0.1)`
    - Border radius: `999px`
    - Padding: `0.625rem 1rem`
    - Font size: `0.875rem`
    - Color: `#999`
    - Box shadow: `0 1px 3px rgba(0, 0, 0, 0.3)`
  - Hover: Border color brightens, text becomes white, shadow enhances, slight lift

#### Infinite Scrolling Galleries
Two horizontal scrolling sections with different directions:

**Left-Scrolling Gallery (Posters & Gaming Images)**:
- Animation: `scrollLeft 120s linear infinite`
- Items: Duplicated array of shuffled images (posters + gaming)
- Item properties:
  - Width: Random between `280px` and `360px`
  - Aspect ratio: `16/9`
  - Margin right: Random between `2rem` and `4rem`
  - Background: `#1a1a1a`
  - Border: `1px solid rgba(255, 255, 255, 0.1)`
  - Border radius: `16px`
  - Box shadow: `0 2px 8px rgba(0, 0, 0, 0.4)`
- Image handling:
  - Landscape images: `object-fit: cover`
  - Portrait images: `object-fit: contain`
  - Lazy loading enabled
  - Transform: `translateZ(0)` for hardware acceleration

**Right-Scrolling Gallery (Videos)**:
- Animation: `scrollRight 140s linear infinite`
- Items: Duplicated array of shuffled videos
- Same item properties as left-scrolling gallery
- Video properties:
  - Muted, looped, autoplay
  - `playsInline` attribute
  - `preload="metadata"`
  - `object-fit: cover`

#### Contact Section
- Container:
  - Background: `rgba(26, 26, 26, 0.5)`
  - Border: `1px solid rgba(255, 255, 255, 0.1)`
  - Border radius: `999px`
  - Padding: `1rem 1.25rem`
  - Max width: `500px`
  - Flex column layout

- Heading: "Contact Me"
  - Font size: `0.8rem`
  - Font weight: 400
  - Color: `#aaaaaa`
  - Letter spacing: `0.1em`
  - Text transform: uppercase

- Contact Links:
  - Email link with mail icon
  - Discord link with Discord icon
  - Location text with location icon
  - Icons: 16px × 16px, inverted filter
  - Links: Font size `0.8rem`, color `#999`, hover to `#ffffff`

#### Footer
- Text align: center
- Padding: `2rem 2rem 1rem`
- Color: `#666`
- Font size: `0.75rem`
- Font weight: 300
- Copyright text with dynamic year

---

### 2. Portfolio Gallery Page (`App.tsx`)

#### Layout Structure
- Full viewport height
- Fixed canvas background (z-index: 0)
- Sticky header (z-index: 100)
- Main content (z-index: 1)
- Footer (z-index: 1)

#### Sticky Header
- Position: `sticky`, top: `0`
- Background: `rgba(10, 10, 10, 0.8)` with `backdrop-filter: blur(20px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Padding: `1.5rem 2rem`
- Margin: `5rem 1rem 1rem` (top margin creates space)
- Border radius: `999px` (pill-shaped)
- Max width: `1400px`, centered

**Back Button**:
- Text: "← [Studio Name]"
- Font size: `1.2rem`
- Font weight: 300
- Color: `#ffffff`
- Background: transparent
- Border: none
- Letter spacing: `-0.02em`
- Hover: Opacity changes to `0.6`

**Navigation Buttons**:
- Display: flex with gap `0.5rem`
- Each button:
  - Padding: `0.5rem 1.2rem`
  - Background: White when active, transparent when inactive
  - Border: `1px solid rgba(255, 255, 255, 0.1)`
  - Border radius: `999px`
  - Color: `#0a0a0a` when active, `#999` when inactive
  - Font size: `0.85rem`
  - Font weight: 400
  - Text transform: capitalize
  - Letter spacing: `0.05em`
  - Hover (inactive): Border becomes white, text becomes white
  - Click: Scrolls to top instantly

#### Main Content Area
- Max width: `1400px`
- Margin: `0 auto`
- Padding: `4rem 2rem`
- Contains conditional rendering based on active section:
  - `gaming`: ImageGallery component
  - `posters`: ImageGallery component
  - `videos`: VideoGallery component

#### Footer
- Text align: center
- Padding: `3rem 2rem`
- Border top: `1px solid rgba(255, 255, 255, 0.1)`
- Color: `#999`
- Font size: `0.85rem`
- Font weight: 300
- Studio name and copyright

---

### 3. Image Gallery Component (`ImageGallery.tsx`)

#### Title
- Font size: `clamp(2rem, 5vw, 3rem)`
- Font weight: 300
- Margin bottom: `3rem`
- Text align: left
- Color: `#ffffff`
- Letter spacing: `-0.02em`

#### Grid Layout
- Display: grid
- **Posters**: `repeat(auto-fill, minmax(220px, 1fr))`
- **Gaming**: `repeat(auto-fill, minmax(320px, 1fr))`
- Gap: `1.5rem`

#### Grid Items
- **Posters**: Aspect ratio `9/16` (portrait)
- **Gaming**: Aspect ratio `16/9` (landscape)
- Background: `#1a1a1a`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Border radius: `16px`
- Cursor: pointer
- Overflow: hidden
- Display: flex, centered
- Hover:
  - Border color: `rgba(255, 255, 255, 0.3)`
  - Transform: `translateY(-4px)`

#### Images
- Width: `100%`
- Height: `100%`
- Object fit: Dynamic based on aspect ratio
  - Posters: `cover` if image is taller, `contain` if wider
  - Gaming: `cover` if image is wider, `contain` if taller
- Lazy loading enabled
- Click: Opens modal with full-size image

---

### 4. Video Gallery Component (`VideoGallery.tsx`)

#### Title
- Same styling as ImageGallery title

#### Grid Layout
- Display: grid
- Template: `repeat(auto-fill, minmax(320px, 1fr))`
- Gap: `1.5rem`

#### Grid Items
- Aspect ratio: `16/9`
- Same styling as ImageGallery items
- Hover behavior:
  - Video plays on hover
  - Video pauses and resets on mouse leave
  - Border and transform effects same as images

#### Videos
- Max width/height: `100%`
- Object fit: `contain`
- Muted, looped
- `playsInline` attribute

#### Play Button Overlay
- Position: absolute, centered
- Size: `50px × 50px`
- Background: `rgba(0, 0, 0, 0.6)`
- Border radius: `50%`
- Backdrop filter: `blur(10px)`
- Contains play icon (SVG triangle)
- Hover: Scale `1.1`, background `rgba(0, 0, 0, 0.8)`
- Click: Opens modal with full video

---

### 5. Modal Component (`Modal.tsx`)

#### Overlay
- Position: fixed, full viewport
- Background: `rgba(0, 0, 0, 0.9)`
- Z-index: `1000`
- Display: flex, centered
- Padding: `2rem`
- Cursor: pointer (closes on click)

#### Content Container
- Position: relative
- Max width: `90vw`
- Max height: `90vh`
- Background: `#1a1a1a`
- Border radius: `16px`
- Padding: `1rem`
- Display: flex, centered
- Click: Stops propagation (prevents closing)

#### Close Button
- Position: absolute, top: `-60px`, right: `0`
- Size: `40px × 40px`
- Background: transparent
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Color: `#ffffff`
- Font size: `1.5rem`
- Font weight: 300
- Text: `×`
- Hover: Border becomes white, background `rgba(255, 255, 255, 0.1)`

#### Media Display
- **Images**: Max width/height `100%`, `object-fit: contain`
- **Videos**: Max width/height `100%`, `object-fit: contain`, controls enabled, autoplay
- Escape key closes modal
- Body scroll locked when open

---

## Responsive Design

### Breakpoints
- **Tablet**: `max-width: 768px`
- **Mobile**: `max-width: 480px`

### Mobile Adaptations

#### Landing Page
- Reduced padding: `1rem`
- Smaller software badges: `0.75rem` font, `0.5rem 0.75rem` padding
- Smaller button: `0.875rem 2rem` padding, `0.85rem` font
- Smaller scroll items: `200px` width
- Contact container: Full width with `1rem` padding
- Contact links: Column layout on mobile

#### Portfolio Page
- Header: Reduced padding `1rem`, margin `3rem 0.5rem 0.5rem`, border radius `16px`
- Navigation: Smaller gap `0.25rem`, buttons `0.4rem 0.8rem` padding, `0.75rem` font
- Main: Padding `2rem 1rem`
- Footer: Padding `2rem 1rem`, font size `0.7rem`

#### Galleries
- Grid: `repeat(auto-fill, minmax(280px, 1fr))` on tablet
- Grid: `1fr` (single column) on mobile
- Title: `1.5rem` on mobile
- Gap: `1rem` on mobile/tablet

---

## Performance Optimizations

1. **Canvas Rendering**:
   - Uses `requestAnimationFrame`
   - Debounced resize handlers (150ms)
   - Conditional redraws (only when needed)
   - Hardware acceleration with `translateZ(0)`

2. **Image Loading**:
   - Lazy loading on images
   - `loading="lazy"` attribute
   - `decoding="async"` attribute
   - Dynamic object-fit based on aspect ratio

3. **Video Loading**:
   - `preload="metadata"` (not full video)
   - Play on hover only
   - Pause and reset on mouse leave

4. **Scroll Performance**:
   - `will-change: transform` on animated elements
   - `transform: translateZ(0)` for hardware acceleration
   - `backface-visibility: hidden`

5. **State Management**:
   - `useMemo` for shuffled arrays and random values
   - Conditional rendering to avoid unnecessary computations

---

## Accessibility Features

1. **Keyboard Navigation**:
   - Escape key closes modals
   - All buttons are keyboard accessible

2. **Semantic HTML**:
   - Proper heading hierarchy (h1, h2, h3)
   - Button elements for interactive elements
   - Alt text on images

3. **Visual Feedback**:
   - Clear hover states
   - Active states for navigation
   - Focus states (browser default)

---

## File Structure

```
/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   └── components/
│       ├── Landing.tsx
│       ├── ImageGallery.tsx
│       ├── VideoGallery.tsx
│       └── Modal.tsx
└── Assets/
    ├── Gaming/
    │   └── [image files]
    ├── Posters/
    │   └── [image files]
    ├── Videos/
    │   └── [video files]
    └── Icons/
        └── [icon files]
```

---

## Key Implementation Details

### State Management
- `showLanding`: Boolean to toggle between landing and portfolio
- `activeSection`: 'gaming' | 'posters' | 'videos'
- `selectedImage`: String | null for modal
- `selectedVideo`: String | null for modal
- `mousePosition`: { x, y } for cursor interaction

### Scroll Behavior
- Scroll resets to top when switching sections
- Uses both `window.scrollTo` and `document.scrollTo` for compatibility
- Instant scroll on section change, smooth scroll on mount

### Image/Video Arrays
- Defined in `App.tsx` as single source of truth
- Passed as props to components
- Shuffled on landing page for randomness

### Canvas Implementation
- Separate canvas for landing and portfolio pages
- Grid spots generated once and fixed
- Mouse interaction creates subtle radial gradient
- Resize handling with debouncing

### Infinite Scroll
- Duplicated arrays for seamless loop
- CSS animations with `linear` timing
- Different speeds for visual interest (120s vs 140s)
- Random widths and spacing for organic feel

---

## Design Philosophy

1. **Minimalism**: Clean, uncluttered interface with plenty of whitespace
2. **Dark Theme**: Near-black background with subtle white accents
3. **Subtle Motion**: Gentle animations and transitions
4. **Content First**: Work is the hero, UI stays out of the way
5. **Modern Aesthetics**: Pill-shaped buttons, rounded corners, glassmorphism effects
6. **Performance**: Smooth 60fps animations and interactions
7. **Responsive**: Works beautifully on all screen sizes

---

## Customization Points

To adapt this design for other portfolios:

1. **Colors**: Update color palette in component styles
2. **Typography**: Change font family and sizes
3. **Content**: Replace images, videos, and text
4. **Sections**: Modify navigation buttons and gallery types
5. **Software Tools**: Update software list and icons
6. **Contact Info**: Change email, Discord, and location
7. **Branding**: Update studio name and personal name
8. **Animations**: Adjust durations and easing functions
9. **Grid Layouts**: Modify aspect ratios and grid templates
10. **Canvas Effects**: Tweak grid size, opacity, and spot count

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires Canvas API support
- Requires CSS Grid and Flexbox support
- Requires ES6+ JavaScript features
- Video codec support depends on browser

---

This specification provides a complete blueprint for recreating this portfolio design with any technology stack or adapting it for different use cases.

