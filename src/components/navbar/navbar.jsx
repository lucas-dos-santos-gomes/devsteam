import { BsCart4 } from 'react-icons/bs';
import styles from './navbar.module.css';
import Logo from '@/components/logo/logo';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Logo />
      <input />
      <BsCart4 size={40} />
    </header>
  );
}