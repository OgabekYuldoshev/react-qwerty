import type { Editor } from "@tiptap/react";


export type ActionOption = {
	spacer?: boolean;
	render({ editor }: { editor: Editor }): JSX.Element;
};
export function createAction({ spacer = false, ...options }: ActionOption) {
	const item = Object.assign(
		{},
		{
			spacer,
			...options,
		},
	);

	item.render = item.render.bind(item);

	return item;
}
