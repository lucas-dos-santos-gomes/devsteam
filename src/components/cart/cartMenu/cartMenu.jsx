import styles from './cartMenu.module.css';
import CartOption from '../cartOption/cartOption';
import Button from '@/components/forms/button/button';

export default function CartMenu({ cart, onRemove }) {
  return (
    <div className={styles.menu}>
      {
        cart.length === 0 ? <h3 className={styles.emptycart}>Não há itens no carrinho</h3> : (
          <div>
            <div className={styles.options}>
              {cart.map(({ image, name, price }, pos) => 
                <CartOption image={image} title={name} price={price} onRemove={() => onRemove(pos)} key={`cart-info-${pos}`} />
              )}
            </div>
            <div className={styles.priceline}>
              <h2>Total:</h2>
              <h2 className={styles.price}>R$ {cart.reduce((prev, current) => prev + current.price, 0).toFixed(2).replace(".", ",")}</h2>
            </div>
            <Button fullWidth>Finalizar compra</Button>
          </div>
        )
      }
    </div>
  );
}