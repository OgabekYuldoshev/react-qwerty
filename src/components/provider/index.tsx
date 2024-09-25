import { useMemo } from "react";
import { defaultExtensions } from "../../extensions";
import { EditorProvider } from "../../hooks/useEditor";
import type { createExtention } from "../../utils/createExtension";
import { Container } from "../container";
import { Content } from "../content";
import { Toolbar } from "../toolbar";

type ReactQwertyProps = {
	mode?: "dark" | "light";
	extentions?: ReturnType<typeof createExtention>[];
};

const Provider = ({ mode, extentions = [] }: ReactQwertyProps) => {
	const additionalExtentions = useMemo(
		() => extentions.map((ext) => ext.extention),
		[extentions],
	);
	const additionalActions = useMemo(
		() => extentions.map((ext) => ext.action),
		[extentions],
	);
	return (
		<EditorProvider
			autofocus
			extensions={[...defaultExtensions, ...additionalExtentions]}
		>
			<Container mode={mode}>
				<Toolbar actions={additionalActions} />
				<Content />
			</Container>
		</EditorProvider>
	);
};

export default Provider;
