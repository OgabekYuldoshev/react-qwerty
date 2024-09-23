import styles from "./popover.module.scss";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import React from "react";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={clsx(styles.baseContent, className)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
