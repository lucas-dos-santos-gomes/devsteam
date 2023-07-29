import styles from './navbar.module.css';
import Logo from '@/components/logo/logo';
import Input from '@/components/forms/input/input';
import CartButton from '@/components/cart/cartButton/cartButton';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </div>
      <CartButton />
    </header>
  );
}