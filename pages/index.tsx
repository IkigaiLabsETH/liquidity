// index.tsx
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage, InferGetStaticPropsType } from "next";
import { fetchPrices } from "../lib/coingecko";
import BTCETHRatio from "../components/BTCETHRatio";
import ETHereum from '../components//ETHereum';

type EthereumData = {
  name: string;
  // other data points...
};

interface HomeProps {
  ethereumData: EthereumData;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ prices }) => {
  return (
    <main className={styles.main}>
      <div className={styles.price}>
        {prices.map((crypto) => (
          <h2 key={crypto.id}>
            {crypto.id.charAt(0).toUpperCase() + crypto.id.slice(1)} Price: {crypto.price} ({crypto.priceDiff})
          </h2>
        ))}
      </div>

      <div className={styles.connect}>
        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
      <BTCETHRatio />
      <ETHereum />
    </main>
  );
};

export async function getStaticProps() {
  const prices = await fetchPrices();

  return {
    props: {
      prices,
    },
    revalidate: 60, // Re-fetch the data every minute
  };
}

export default Home;
