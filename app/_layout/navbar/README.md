# Global Navbar System

A flexible, adaptive navbar system that automatically adjusts based on the current route.

## 🚀 Features

- **Automatic Route Detection**: Adapts navbar style based on current page
- **Multiple Variants**: Support for absolute, fixed, relative, and sticky positioning
- **Theme Support**: Light and dark color schemes
- **Active Page Highlighting**: Shows current page in navigation
- **Responsive Design**: Mobile-friendly with breakpoint support
- **Smooth Animations**: Magnetic buttons and hover effects

## 📁 File Structure

```
navbar/
├── index.jsx       # Main Navbar component with variants
├── global.jsx      # Global wrapper with route-based logic
├── brand.jsx       # Logo/brand component
├── list.jsx        # Navigation links list
└── README.md       # This file
```

## 🔧 How It Works

### Global Implementation

The navbar is **automatically included** in the root layout (`app/layout.jsx`), so it appears on all pages without manual inclusion.

```jsx
// app/layout.jsx
import { GlobalNavbar } from '@/layout';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <GlobalNavbar />  {/* Automatically adapts to each page */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### Configuration

Edit `global.jsx` to customize navbar behavior for specific routes:

```jsx
const navbarConfig = {
  '/': {
    variant: 'absolute',  // Overlays content
    theme: 'light',       // White text
  },
  '/about': {
    variant: 'absolute',
    theme: 'light',
  },
  '/work': {
    variant: 'fixed',     // Stays at top while scrolling
    theme: 'dark',        // Dark text
  },
  '/contact': {
    variant: 'fixed',
    theme: 'dark',
  },
};
```

## 🎨 Variant Options

### `absolute`
- Overlays page content
- Perfect for hero sections with background images
- Used on: Home, About pages

### `fixed`
- Stays at top of viewport when scrolling
- Includes backdrop blur and border
- Used on: Work, Contact pages

### `relative`
- Normal document flow
- Use for standard page layouts

### `sticky`
- Sticks to top when scrolled past
- Includes backdrop blur and border

## 🌓 Theme Options

### `light`
- White text (`text-background`)
- For dark backgrounds/images

### `dark`
- Dark text (`text-foreground`)
- For light backgrounds

### `auto`
- No color override
- Inherits from parent

## 📝 Usage Examples

### Default (Automatic)
No code needed! The navbar appears automatically on all pages.

### Manual Override
If you need custom navbar behavior on a specific page:

```jsx
import { Navbar } from '@/layout';

export default function CustomPage() {
  return (
    <>
      <Navbar variant="sticky" theme="dark" className="shadow-lg" />
      {/* Page content */}
    </>
  );
}
```

### Hiding Navbar on Specific Page
Remove GlobalNavbar from layout and add manually to pages where needed, or conditionally render in global.jsx:

```jsx
// In global.jsx
export function GlobalNavbar() {
  const pathname = usePathname();
  
  // Don't show navbar on specific pages
  if (pathname === '/special-page') {
    return null;
  }
  
  // ... rest of code
}
```

## 🎯 Key Components

### NavbarBrand
Animated logo with hover effects. Links to home page.

### NavbarList
Navigation menu with:
- Active page highlighting
- Magnetic hover effects
- Responsive visibility (hidden on mobile)

## 🔄 Active Page Detection

Navigation automatically detects and highlights the current page:

```jsx
const isActive = pathname === href;
```

Active pages show:
- Bold font weight
- Visible dot indicator
- Enhanced styling

## ⚙️ Customization

### Add New Route Configuration

```jsx
// In global.jsx
const navbarConfig = {
  // ... existing configs
  '/new-page': {
    variant: 'fixed',
    theme: 'light',
  },
};
```

### Modify Brand Text

```jsx
// In brand.jsx
<h5>Your Name</h5>
<h5>Your Title</h5>
```

### Add Navigation Items

```jsx
// In app/_data/nav-items.js
export const navItems = [
  { href: '/', title: 'home' },
  { href: '/new-page', title: 'New Page' },
  // ...
];
```

## 🎨 Styling

Navbar uses Tailwind CSS classes and can be customized via:
- `className` prop for additional classes
- Theme colors from `globals.css`
- Styled components for complex animations

## 📱 Responsive Behavior

- Desktop: Full navigation menu visible
- Mobile: Navigation hidden (`.max-lg:hidden`)
- Consider adding mobile menu/hamburger for production

## 🚀 Future Enhancements

- [ ] Mobile hamburger menu
- [ ] Mega menu support
- [ ] Search functionality
- [ ] User profile dropdown
- [ ] Notification indicators

## 💡 Tips

1. **Keep it Simple**: Use GlobalNavbar for most cases
2. **Consistent Themes**: Match navbar theme to page background
3. **Performance**: Navbar is client-side for interactivity
4. **Accessibility**: Ensure sufficient color contrast
5. **Testing**: Test navbar on all routes after changes

---

**Last Updated**: February 2026
**Maintained By**: Vikas Narlakanti
