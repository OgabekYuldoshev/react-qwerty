import { Button } from "../atoms/button";
import { createAction } from "./createAction";

export const baseToolbar = [
	createAction({
		key: "Undo",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Undo"
					title="Undo"
					active={editor.isActive("undo") || false}
					disabled={!editor.can().undo() || false}
					onClick={() => editor.chain().undo().run()}
				/>
			);
		},
	}),
	createAction({
		key: "Redo",
		spacer: true,
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Redo"
					title="Redo"
					active={editor.isActive("redo") || false}
					disabled={!editor.can().redo() || false}
					onClick={() => editor.chain().redo().run()}
				/>
			);
		},
	}),
	createAction({
		key: "Bold",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Bold"
					title="Bold"
					active={editor.isActive("bold") || false}
					disabled={!editor.can().toggleBold() || false}
					onClick={() => editor.chain().toggleBold().run()}
				/>
			);
		},
	}),
	createAction({
		key: "Italic",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Italic"
					title="Italic"
					active={editor.isActive("italic") || false}
					disabled={!editor.can().toggleItalic() || false}
					onClick={() => editor.chain().toggleItalic().run()}
				/>
			);
		},
	}),
	createAction({
		key: "Strikethrough",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Strikethrough"
					title="Strikethrough"
					active={editor.isActive("strike") || false}
					disabled={!editor.can().toggleStrike() || false}
					onClick={() => editor.chain().toggleStrike().run()}
				/>
			);
		},
	}),
	createAction({
		key: "Code",
		spacer: true,
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Code"
					title="Code"
					active={editor.isActive("code") || false}
					disabled={!editor.can().toggleCode() || false}
					onClick={() => editor.chain().toggleCode().run()}
				/>
			);
		},
	}),
	createAction({
		key: "Quote",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Quote"
					title="Quote"
					active={editor.isActive("blockquote") || false}
					disabled={!editor.can().toggleBlockquote() || false}
					onClick={() => editor.chain().toggleBlockquote().run()}
				/>
			);
		},
	}),
	createAction({
		key: "CodeBlock",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="SquareChartGantt"
					title="CodeBlock"
					active={editor.isActive("codeBlock") || false}
					disabled={!editor.can().toggleCodeBlock() || false}
					onClick={() => editor.chain().toggleCodeBlock().run()}
				/>
			);
		},
	}),
	createAction({
		key: "BulletList",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="List"
					title="BulletList"
					active={editor.isActive("bulletList") || false}
					disabled={!editor.can().toggleBulletList() || false}
					onClick={() => editor.chain().toggleBulletList().run()}
				/>
			);
		},
	}),
	createAction({
		key: "OrderedList",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="ListOrdered"
					title="OrderedList"
					active={editor.isActive("orderedList") || false}
					disabled={!editor.can().toggleOrderedList() || false}
					onClick={() => editor.chain().toggleOrderedList().run()}
				/>
			);
		},
	}),
	createAction({
		key: "HorizontalRule",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="Minus"
					title="HorizontalRule"
					disabled={!editor.can().setHorizontalRule() || false}
					onClick={() => editor.chain().setHorizontalRule().run()}
				/>
			);
		},
	}),
	createAction({
		key: "HardBreak",
		render({ editor }) {
			return (
				<Button
					key={this.key}
					icon="TextCursorInput"
					title="HardBreak"
					disabled={!editor.can().setHardBreak() || false}
					onClick={() => editor.chain().setHardBreak().run()}
				/>
			);
		},
	}),
];
