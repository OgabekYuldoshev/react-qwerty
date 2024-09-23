import type { PropsWithChildren } from "react";
import styles from "./container.module.scss";
import clsx from "clsx";
interface Props extends PropsWithChildren {
	mode?: "light" | "dark";
}
export const Container = ({ mode = "light", children }: Props) => {
	return (
		<div
			className={clsx(
				"react-qwerty",
				mode === "dark" && "react-qwerty--dark",
				styles.base,
			)}
		>
			{children}
		</div>
	);
};
