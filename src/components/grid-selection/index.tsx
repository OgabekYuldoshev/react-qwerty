import { useState } from "react";
import styles from "./grid-selection.module.scss";
import clsx from "clsx";

interface Props {
	rows?: number;
	cols?: number;
	onChange?(rows: number, cols: number): void;
	onSelected?(rows: number, cols: number): void;
}
export const GridSelection = ({
	rows = 10,
	cols = 10,
	onChange,
	onSelected,
}: Props) => {
	const [grid, setGrid] = useState([0, 0]);

	return (
		<div className={styles.base}>
			<div className={styles.baseGrid}>
				{generateArray(rows).map((row) => (
					<div key={row} className={styles.baseRow}>
						{generateArray(cols).map((col) => (
							<div
								key={row + col}
								className={clsx(
									styles.baseCol,
									col <= grid[1] && row <= grid[0] && styles["baseCol--active"],
								)}
								onMouseOver={() => {
									setGrid([row, col]);
									onChange?.(row, col);
								}}
								onFocus={() => {
									setGrid([row, col]);
									onChange?.(row, col);
								}}
								onMouseDown={() => {
									setGrid([0, 0]);
									onSelected?.(row, col);
								}}
							/>
						))}
					</div>
				))}
			</div>
			<p className={styles.baseFooter}>
				{grid[0]} x {grid[1]}
			</p>
		</div>
	);
};

function generateArray(length: number) {
	return Array.from({ length }).map((_, index) => index + 1);
}
