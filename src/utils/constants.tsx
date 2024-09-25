import { Button } from "../components/button";
import { createAction } from "./createAction";
import { getKey } from "./getKey";

export const baseToolbar = [
  createAction({
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    spacer: true,
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    spacer: true,
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
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
    render({ editor }) {
      return (
        <Button
          key={getKey()}
          icon="Minus"
          title="HorizontalRule"
          disabled={!editor.can().setHorizontalRule() || false}
          onClick={() => editor.chain().setHorizontalRule().run()}
        />
      );
    },
  }),
  createAction({
    render({ editor }) {
      return (
        <Button
          key={getKey()}
          icon="TextCursorInput"
          title="HardBreak"
          disabled={!editor.can().setHardBreak() || false}
          onClick={() => editor.chain().setHardBreak().run()}
        />
      );
    },
  }),
];
