import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./button.module.scss";
import { icons } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

export type ButtonProps = {
	icon: keyof typeof icons;
	active?: boolean;
	asChild?: boolean;
} & Omit<ComponentProps<"button">, "children">;

export const Button: React.FC<ButtonProps> = React.forwardRef<
	HTMLButtonElement,
	ButtonProps
>(({ icon, active = false, asChild = false, ...props }, ref) => {
	const Icon = icons[icon];
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			ref={ref}
			className={clsx(
				styles.base,
				active && styles["base--active"],
				props.disabled && styles["base--disabled"],
				props.className,
			)}
			{...props}
		>
			<Icon size={18} />
		</Comp>
	);
});
