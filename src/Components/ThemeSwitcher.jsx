// src/components/ThemeSwitcher.jsx
"use client"; // Indicates that this component is a client component in Next.js

import { useTheme } from 'next-themes'; // Hook for theme management
import { useEffect, useState } from 'react'; // React hooks for side effects and state

// ThemeSwitcher component: toggles between light and dark themes
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false); // State to track if component has mounted
  const { theme, setTheme } = useTheme(); // Get current theme and function to set theme

  useEffect(() => {
    setMounted(true); // Update mounted state after component mounts
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <div>
      The current theme is: {theme} {/* Display the current theme */}
      <button onClick={() => setTheme('light')}>Light Mode</button> {/* Button to switch to light mode */}
      <button onClick={() => setTheme('dark')}>Dark Mode</button> {/* Button to switch to dark mode */}
    </div>
  );
}
