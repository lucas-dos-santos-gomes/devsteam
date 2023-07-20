import Head from 'next/head';

import styles from '@/styles/index.module.css';

import Navbar from '@/components/navbar/navbar';
import Container from '@/components/container/container'
import Subtitle from '@/components/tipography/subtitle/subtitle';
import SaleCard from '@/components/cards/saleCard/saleCard';
import GameCard from '@/components/cards/gameCard/gameCard';

import { SALE_GAMES } from '@/constants/database';

export default function Home() {
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
              {SALE_GAMES.map(e => {
                return (<SaleCard name={e.name} percent={e.discount} price={e.price} />);
              })}
            </ul>
          </section>
          <section className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <ul className={styles.gamecontainer}>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </ul>
          </section>
        </Container>
      </div>
    </>
  );
}
