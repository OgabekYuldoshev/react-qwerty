import { useEditorContext } from "../../hooks/useEditor";
import { baseToolbar } from "../../lib/constants";
import { Spacer } from "../spacer";
import styles from "./toolbar.module.scss";

export const Toolbar = () => {
  const { editor } = useEditorContext();

  return (
    <div className={styles.base}>
      {baseToolbar.map((action) => {
        if (action.spacer) {
          return (
            <>
              {action.render({ editor })}
              <Spacer size={24} orentation="y" />
            </>
          );
        }
        return action.render({ editor });
      })}
    </div>
  );
};
