import type { PropsWithChildren } from "react";
import styles from "./container.module.scss";
import clsx from "clsx";

export const Container = ({ children }: PropsWithChildren) => {
	return <div className={clsx("react-qwerty", styles.base)}>{children}</div>;
};
