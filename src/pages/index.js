import Head from 'next/head';
import { useRecoilState } from 'recoil';

import { cartState } from '@/atoms/cart';

import styles from '@/styles/index.module.css';

import Navbar from '@/components/navbar/navbar';
import Container from '@/components/container/container'
import Subtitle from '@/components/tipography/subtitle/subtitle';
import SaleCard from '@/components/cards/saleCard/saleCard';
import GameCard from '@/components/cards/gameCard/gameCard';

import { saleGames, otherGames } from '@/datas/games';

export default function Home() {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (info) => {
    cart.filter(e => e.name === info.name).length === 0 && setCart([...cart, info]);
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
        <Navbar />
        <Container>
          <section className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <ul className={styles.salecontainer}>
              {saleGames.map(e => {
                return (
                  <SaleCard 
                    name={e.name} 
                    percent={e.discount} 
                    price={e.price} 
                    onAdd={() => handleAddProduct({ 
                      name: e.name,
                      price: e.price - (e.price * e.discount / 100), 
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
              {otherGames.map(e => {
                return (
                  <GameCard 
                    name={e.name} 
                    src={e.src} 
                    categories={e.categories}
                    price={e.price} 
                    onAdd={() => handleAddProduct({ 
                      name: e.name,
                      price: e.price, 
                      image: e.src
                    })} 
                  />
                );
              })}
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
