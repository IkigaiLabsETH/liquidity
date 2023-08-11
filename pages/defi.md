import Head from 'next/head';
import DefiData from '../components/DefiData';
import styles from '../styles/Home.module.css';

const DeFiPage: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>DeFi Data</title>
      <meta name="description" content="DeFi data from Coingecko." />
    </Head>
    
    <main className={styles.main}>
      <DefiData />
    </main>
  </div>
);

export default DeFiPage;
