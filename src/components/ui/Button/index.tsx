import styles from "./Button.module.css";

type Props = {
  text: string;
  value: string | null;
};

const Button = ({ text, value }: Props) => {
  if (!value) return null;
  return (
    <a
      className={styles.button}
      href={value}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Button;
