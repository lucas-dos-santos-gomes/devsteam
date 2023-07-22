import { BsCart4 } from 'react-icons/bs';
import styles from './cartButton.module.css';
import CartMenu from '@/components/cart/cartMenu/cartMenu';

export default function CartButton() {
  return (
    <div>
      <BsCart4 className={styles.icon} size={40} onClick={() => console.log(e)} />
    </div>
  );
}