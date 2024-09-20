import constate from "constate";
import {
	type UseEditorOptions,
	useEditor as useTipTapEditor,
} from "@tiptap/react";

export type EditorProps = UseEditorOptions;

export const useEditor = ({ ...props }: EditorProps) => {
	const editor = useTipTapEditor(props);

	if (!editor) {
		console.error(["[react-qwerty]: Editor is not available!"]);
	}

	return { editor };
};

const [EditorProvider, useEditorContext] = constate(useEditor);

export { useEditorContext, EditorProvider };
