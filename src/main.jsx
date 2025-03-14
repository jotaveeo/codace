import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import Contato from "./components/Contato/App.jsx";
import Footer from "./components/Footer/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Contato />
    <Footer />
  </StrictMode>
);
