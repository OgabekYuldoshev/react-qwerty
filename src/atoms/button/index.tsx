import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./button.module.scss";
import { icons } from "lucide-react";

export type ButtonProps = {
	icon: keyof typeof icons;
	active?: boolean;
} & Omit<ComponentProps<"button">, "children">;

export const Button: React.FC<ButtonProps> = ({
	icon,
	active = false,
	...props
}) => {
	const Icon = icons[icon];
	return (
		<button
			className={clsx(
				styles.base,
				active && styles["base--active"],
				props.disabled && styles["base--disabled"],
				props.className,
			)}
			{...props}
		>
			<Icon size={18} />
		</button>
	);
};

Button.displayName = "Button";
