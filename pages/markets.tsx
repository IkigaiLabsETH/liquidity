import Head from 'next/head';
import MarketMetrics from '../components/MarketMetrics';
import styles from '../styles/Home.module.css';

const MARKETSPage: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Markets Metrics</title>
      <meta name="description" content="KPIs." />
    </Head>
    
    <main className={styles.main}>
      <MarketMetrics />
    </main>
  </div>
);

export default MARKETSPage;
