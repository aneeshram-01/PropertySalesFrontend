import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { Providers } from "./Context/Providers.jsx";

createRoot(document.getElementById("root")).render(
 
    <NextUIProvider>
      <Providers>
      <App />
      </Providers>
    </NextUIProvider>

);
