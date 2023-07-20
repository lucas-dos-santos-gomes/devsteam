import styles from './button.module.css';

export default function AddCartButton({ children }) {
  return (
    <button className={styles.button}>{children}</button>
  );
}