import { useMemo } from "react";
import { useEditorContext } from "../../hooks/useEditor";
import { baseToolbar } from "../../utils/constants";
import type { createAction } from "../../utils/createAction";
import { getKey } from "../../utils/getKey";
import { Spacer } from "../spacer";
import styles from "./toolbar.module.scss";

interface Props {
  actions?: ReturnType<typeof createAction>[];
}
export const Toolbar = ({ actions = [] }: Props) => {
  const { editor } = useEditorContext();

  const renders = useMemo(() => {
    let items = baseToolbar;
    if (actions.length) {
      items = baseToolbar.concat(actions);
    }

    return items.map((item) => {
      const Component = item.render;

      return (
        <>
          <Component key={getKey()} editor={editor} />
          {item.spacer && <Spacer size={24} orentation="y" />}
        </>
      );
    });
  }, [editor, actions]);

  return <div className={styles.base}>{renders}</div>;
};
