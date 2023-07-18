import styles from './navbar.module.css';
import { BsCart4 } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <input />
      <BsCart4 size={40} />
    </header>
  );
}