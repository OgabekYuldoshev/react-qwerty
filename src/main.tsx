import "./assets/index.scss";

import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import { ReactQwerty } from "./editor";
function App() {
	const [mode, setMode] = useState<"light" | "dark">("light");
	return (
		<div className="App">
			<button
				type="button"
				onClick={() => {
					setMode(mode === "light" ? "dark" : "light");
				}}
			>
				Toggle Theme
			</button>
			<ReactQwerty mode={mode} />
		</div>
	);
}

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
