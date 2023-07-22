import { BsCart4 } from 'react-icons/bs';
import styles from './cartButton.module.css';

export default function CartButton() {
  return (
    <BsCart4 className={styles.icon} size={40} />
  );
}