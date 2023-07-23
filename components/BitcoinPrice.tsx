// index.tsx
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

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
        <BitcoinPrice />
      </div>
    </main>
  );
};

export default BitcoinPrice;
