// index.tsx
// 'client'
import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import { NextPage } from "next";
import { fetchPrices } from "../lib/coingecko";
import DefiData from "../components/DefiData";


const Defi: NextPage = async () => {
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
        <DefiData />
      </div>



      <div className={styles.connect}>
        {/* <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
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


export default Defi;
