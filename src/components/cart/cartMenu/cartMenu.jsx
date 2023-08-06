import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '@/atoms/cart';
import { openCartState } from '@/atoms/openCart';

import CartOption from '../cartOption/cartOption';

import styles from './cartMenu.module.css';

import Button from '@/components/forms/button/button';
import Checkout from '@/components/modal/checkout';

export default function CartMenu() {
  const [cart, setCart] = useRecoilState(cartState);
  const [openCart, setOpenCart] = useRecoilState(openCartState);
  const [openCheckout, setOpenCheckout] = useState(false);

  const price = cart.reduce((prev, current) => prev + current.price, 0).toFixed(2).replace(".", ",");

  const handleRemoveProduct = (index) => {
    setCart(cart.filter((item, indexItem) => indexItem !== index));
    cart.length === 1 && setOpenCart(!openCart);
  }

  const handleCloseModal = () => {
    setOpenCheckout(false);
    setOpenCart(false);
    setCart([]);
  }

  return (
    <div className={styles.menu}>
      {cart.length === 0 ? <h3 className={styles.emptycart}>Não há itens no carrinho</h3> : (
        <div>
          <div className={styles.options}>
            {cart.map(({ image, name, price }, pos) => 
              <CartOption 
                image={image} 
                title={name} 
                price={price} 
                onRemove={() => handleRemoveProduct(pos)} 
                key={`cart-info-${pos}`} 
              />
            )}
          </div>
          <div className={styles.priceline}>
            <h2>Total:</h2>
            <h2 className={styles.price}>
              R$ {price}
            </h2>
          </div>
          <Button onClick={() => setOpenCheckout(true)} fullWidth>Finalizar compra</Button>
        </div>
      )}
      <Checkout 
        price={price} 
        open={openCheckout} 
        closeModal={handleCloseModal} 
      />
    </div>
  );
}