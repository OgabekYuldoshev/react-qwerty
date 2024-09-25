import styles from "./colors.module.scss";

interface Props {
  colors: string[];
  onSelected(color: string): void;
}

export const Colors = ({ colors, onSelected }: Props) => {
  return (
    <div className={styles.base}>
      {colors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color }}
          className={styles.color}
          onClick={() => onSelected(color)}
          onKeyDown={() => onSelected(color)}
        />
      ))}
    </div>
  );
};
