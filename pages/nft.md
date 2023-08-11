// pages/nft.tsx
import Head from 'next/head';
import TopMarketCapNFTs from '../components/TopMarketCapNFTs';
import styles from '../styles/Home.module.css';

const NFTPage: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Top NFT Projects by Market Cap</title>
      <meta name="description" content="See the top NFT projects sorted by their market capitalization." />
    </Head>
    
    <main className={styles.main}>
      <TopMarketCapNFTs />
    </main>
  </div>
);

export default NFTPage;
