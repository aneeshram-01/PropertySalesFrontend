// src/context/providers.jsx
"use client"; // Indicates that this component is a client component in Next.js

import { NextUIProvider } from '@nextui-org/react'; // Import NextUI provider for UI components
import { ThemeProvider as NextThemesProvider } from 'next-themes'; // Import NextThemes provider for theme management

// Providers component: wraps children with UI and theme providers
export function Providers({ children }) {
  return (
    <NextUIProvider> {/* Provides NextUI context to child components */}
      <NextThemesProvider attribute="class" defaultTheme="dark"> {/* Provides theme context with default dark theme */}
        {children} {/* Render child components */}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
