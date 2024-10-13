import { StrictMode } from "react"; // Import StrictMode to enable additional checks during development
import { createRoot } from "react-dom/client"; // Import createRoot for rendering the React application
import { NextUIProvider } from "@nextui-org/react"; // Import NextUIProvider for UI styling
import App from "./App.jsx"; // Import the main App component
import "./index.css"; // Import the main CSS file for global styles
import { Providers } from "./Context/Providers.jsx"; // Import custom Providers for context management

// Create the root element and render the application
createRoot(document.getElementById("root")).render(
  <StrictMode> {/* Enable StrictMode to help detect potential problems */}
    <NextUIProvider> {/* Wrap the application in NextUIProvider for UI styling */}
      <Providers> {/* Wrap the application in Providers for context management */}
        <App /> {/* Render the main App component */}
      </Providers>
    </NextUIProvider>
  </StrictMode>
);
