import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { HightlightExtension } from "./Highlight";
import { Indent } from "./Indent";

const defaultExtensions = [
	StarterKit,
	Placeholder.configure({
		placeholder: "Write something …",
	}),
	Indent,
];

export { HightlightExtension, defaultExtensions };
