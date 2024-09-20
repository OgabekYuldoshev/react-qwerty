import "./assets/index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReactQwerty } from "./editor";

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
