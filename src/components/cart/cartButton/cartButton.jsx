import { BsCart4 } from 'react-icons/bs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { openCartState } from '@/atoms/openCart';
import { cartState } from '@/atoms/cart';
import styles from './cartButton.module.css';
import CartMenu from '@/components/cart/cartMenu/cartMenu';

export default function CartButton() {
  const [openCart, setOpenCart] = useRecoilState(openCartState);
  const cart = useRecoilValue(cartState);
  return (
    <div className={`${styles.cartcontainer} ${openCart && styles.clicked}`}>
      <BsCart4 size={40} onClick={() => setOpenCart(!openCart)} />
      {cart.length == 0 || <div className={styles.number}>{cart.length}</div>}
      {openCart && <CartMenu />}
    </div>
  );
}