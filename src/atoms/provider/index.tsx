import { Container } from "../container";
import { Content } from "../content";
import { Toolbar } from "../toolbar";

const Provider = () => {
	return (
		<Container>
			<Toolbar />
			<Content />
		</Container>
	);
};

export default Provider;
