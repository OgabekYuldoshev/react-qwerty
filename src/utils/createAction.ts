import type { Editor } from "@tiptap/react";

export type ActionOption = {
	key: string;
	spacer?: boolean;
	render({ editor }: { editor: Editor }): JSX.Element;
};
export function createAction({ spacer = false, ...options }: ActionOption) {
	const action = Object.assign(
		{},
		{
			spacer,
			...options,
		},
	);

	return action;
}
