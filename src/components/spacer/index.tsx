import clsx from "clsx";
import styles from "./spacer.module.scss";

export type SpacerProps = {
	orentation?: "x" | "y";
	size: number;
};
export const Spacer = ({ orentation = "x", size }: SpacerProps) => {
	return (
		<div
			style={{ "--size": `${size}px` } as any}
			className={clsx(styles.base, styles[`base--${orentation}`])}
		/>
	);
};
