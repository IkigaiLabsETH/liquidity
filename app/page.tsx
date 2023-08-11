// index.tsx
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage, InferGetStaticPropsType } from "next";
import { fetchPrices } from "../lib/coingecko";
import BTCETHRatio from "../components/BTCETHRatio";
import Ethereum from '../components/ETHereum';
import EthereumTreasury from '../components/EthereumTreasury';
import EthereumPriceIncrease from "../components/EthereumPriceIncrease";
import DuneAnalyticsData from "../components/DuneAnalyticsData";


const Home: NextPage = async () => {
  const prices = await fetchPrices();
  console.log(process.env.DUNE_API_KEY)
  return (

    <main className={styles.main}>
      <div className={styles.priceContainer}>
        {prices.map((crypto) => (
          <div key={crypto.id} className={styles.price}>
            <h1>
              {crypto.id.charAt(0).toUpperCase() + crypto.id.slice(1)} Price: {crypto.price} ({crypto.priceDiff})
            </h1>
          </div>
        ))}
      </div>

      <div className={styles.ratio}>
        <BTCETHRatio />
      </div>

      <div className={styles.ethereumTreasury}>
        <EthereumTreasury />
      </div>

      <div className={styles.ethereum}>
        <Ethereum />
      </div>

      <div className={styles.ethereum}>
        <DuneAnalyticsData />
      </div>



      <div className={styles.connect}>
        {/* <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        /> */}
        
      </div>
    </main>
  );
};

// export async function getStaticProps() {
  

//   return {
//     props: {
//       prices,
//     },
//     revalidate: 60, // Re-fetch the data every minute
//   };
// }

export default Home;
