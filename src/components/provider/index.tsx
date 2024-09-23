import { defaultExtension } from "../../extensions";
import { EditorProvider } from "../../hooks/useEditor";
import { Container } from "../container";
import { Content } from "../content";
import { Toolbar } from "../toolbar";

type ReactQwertyProps = {
	mode?: "dark" | "light";
};

const Provider = ({ mode }: ReactQwertyProps) => {
	return (
		<EditorProvider autofocus extensions={defaultExtension}>
			<Container mode={mode}>
				<Toolbar />
				<Content />
			</Container>
		</EditorProvider>
	);
};

export default Provider;
