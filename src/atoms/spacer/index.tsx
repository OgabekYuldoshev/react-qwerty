import styles from "./spacer.module.scss";

export type SpacerProps = {
	orentation: "x" | "y";
	size: number;
};
export const Spacer = () => {
	return <div className={styles.base} />;
};
