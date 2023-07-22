import { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import styles from './cartButton.module.css';
import CartMenu from '@/components/cart/cartMenu/cartMenu';

export default function CartButton(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.cartcontainer} ${open && styles.clicked}`}>
      <BsCart4 className={styles.icon} size={40} onClick={() => setOpen(!open)} />
      {open && <CartMenu {...props} />}
    </div>
  );
}