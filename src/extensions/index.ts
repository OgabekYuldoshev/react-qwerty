import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { Indent } from "./Indent";

export const defaultExtension = [
	StarterKit,
	Placeholder.configure({
		placeholder: "Write something …",
	}),
	Indent,
];
