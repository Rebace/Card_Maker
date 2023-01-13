import styles from "./Button.module.css";

type ButtonProps = {
  image: string;
  text: string;
  action: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <div
      title = {props.text}
      onClick={props.action}
      className={styles.button}
    >
      <img src={props.image} />
    </div>
  );
}
