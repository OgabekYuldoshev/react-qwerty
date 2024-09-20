import { Button } from "../button";
import { Spacer } from "../spacer";
import styles from "./toolbar.module.scss";

export const Toolbar = () => {
	return (
		<div className={styles.base}>
			<Button icon="Undo" />
			<Spacer />
			<Button icon="Redo" />
		</div>
	);
};
