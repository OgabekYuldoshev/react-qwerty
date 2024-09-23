import { EditorContent } from "@tiptap/react";
import { useEditorContext } from "../../hooks/useEditor";
import styles from "./content.module.scss";
import clsx from "clsx";

interface Props {
  pageType: "full" | "page";
}
export const Content = ({ pageType = "page" }: Props) => {
  const { editor } = useEditorContext();

  return (
    <div className={styles.base}>
      <EditorContent
        editor={editor}
        className={clsx(styles.baseEditor, styles[`baseEditor--${pageType}`])}
      />
    </div>
  );
};
