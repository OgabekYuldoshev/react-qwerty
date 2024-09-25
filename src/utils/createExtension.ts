import type { AnyExtension } from "@tiptap/core";
import type { createAction } from "./createAction";

interface CreateExtensionOptions {
	name: string;
	extention: AnyExtension;
	action: ReturnType<typeof createAction>;
}

export function createExtention(options: CreateExtensionOptions) {
	const item = Object.assign({}, options)
	return item;
}
