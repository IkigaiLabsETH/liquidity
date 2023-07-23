// index.tsx
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import BitcoinPriceDisplay from "./BitcoinPriceDisplay";  // Import the component that displays Bitcoin price

const BitcoinPrice: NextPage = () => {
  return (
    <main>
      <div className={styles.connect}>
        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>

      <div className={styles.bitcoinPrice}>
        <BitcoinPriceDisplay />  // Call the component that displays Bitcoin price
      </div>
    </main>
  );
};

export default BitcoinPrice;
