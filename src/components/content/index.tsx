import { EditorContent } from "@tiptap/react";
import { useEditorContext } from "../../hooks/useEditor";
import styles from "./content.module.scss";
import clsx from "clsx";

export const Content = () => {
  const { editor } = useEditorContext();

  return (
    <div className={styles.base}>
      <EditorContent editor={editor} className={clsx(styles.baseEditor)} />
    </div>
  );
};
