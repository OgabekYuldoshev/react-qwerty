import "./assets/index.scss";

import "react-qwerty/react-qwerty.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReactQwerty } from "react-qwerty";

function App() {
  return (
    <div className="App">
      <ReactQwerty />
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
