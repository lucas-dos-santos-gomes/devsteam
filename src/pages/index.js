import Head from 'next/head';

import Navbar from '@/components/navbar/navbar';
import Subtitle from "@/components/tipography/subtitle/subtitle";

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
        <Subtitle>Promoções</Subtitle>
      </div>
    </>
  );
}
