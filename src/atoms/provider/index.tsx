import { defaultExtension } from "../../extensions";
import { EditorProvider } from "../../hooks/useEditor";
import { Container } from "../container";
import { Content } from "../content";
import { Toolbar } from "../toolbar";

const Provider = () => {
	return (
		<EditorProvider autofocus extensions={defaultExtension}>
			<Container>
				<Toolbar />
				<Content />
			</Container>
		</EditorProvider>
	);
};

export default Provider;
