import type { Editor } from "@tiptap/react";

type CallbackFnProps = {
	editor: Editor;
};

type ReturnType = string;

type CallbackFn = (props: CallbackFnProps) => ReturnType[];

type CreateToolbarProps = CallbackFnProps;

export const createToolbar = (fn: CallbackFn) => {
	return (props: CreateToolbarProps) => fn(props);
};
