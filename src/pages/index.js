import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/index.module.css';

import Navbar from '@/components/navbar/navbar';
import Container from '@/components/container/container'
import Subtitle from '@/components/tipography/subtitle/subtitle';
import SaleCard from '@/components/cards/saleCard/saleCard';
import GameCard from '@/components/cards/gameCard/gameCard';

import { SALE_GAMES } from '@/constants/database';

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  }

  const handleRemoveProduct = (index) => {
    setCart(cart.filter((item, indexItem) => indexItem !== index));
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="author" content="Lucas dos Santos Gomes" />
        <meta name="keywords" content="steam, games, e-commerce, ecommerce, jogos" />
        <link rel="icon" href="/favicon.ico" />
        <title>DevSteam: A sua loja online de games</title>
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <section className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <ul className={styles.salecontainer}>
              {SALE_GAMES.map(e => {
                return (
                  <SaleCard 
                    name={e.name} 
                    percent={e.discount} 
                    price={e.price} 
                    onAdd={() => handleAddProduct({ 
                      name: e.name,
                      price: e.price, 
                      image: e.name.toLowerCase().replaceAll(" ", "-") + '.jpg'
                    })} 
                  />
                );
              })}
            </ul>
          </section>
          <section className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <ul className={styles.gamecontainer}>
              <GameCard onAdd={() => handleAddProduct({ name: "Counter Strike: Global Offensive", price: 76.49, image: "counter-strike.jpg"})} />
              <GameCard onAdd={() => handleAddProduct({ name: "Counter Strike: Global Offensive", price: 76.49, image: "counter-strike.jpg"})} />
              <GameCard onAdd={() => handleAddProduct({ name: "Counter Strike: Global Offensive", price: 76.49, image: "counter-strike.jpg"})} />
              <GameCard onAdd={() => handleAddProduct({ name: "Counter Strike: Global Offensive", price: 76.49, image: "counter-strike.jpg"})} />
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
