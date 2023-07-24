// components/TopMarketCapNFTs.tsx
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { fetchTopMarketCapNFTs, NFT } from '../lib/coingecko';

// In the component

const TopMarketCapNFTs: React.FC = () => {
  const [nftData, setNftData] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopMarketCapNFTs();
        // Filter out NFTs with volume less than 10000 and sort by volume in descending order
        const sortedData = data.filter(nft => nft.volume_24h && nft.volume_24h.usd >= 10000)
          .sort((a, b) => b.volume_24h.usd - a.volume_24h.usd);
        setNftData(sortedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.grid}>
      {nftData.map((nft) => (
        <div key={nft.id} className={styles.card}>
          <h3>{nft.name}</h3>
          <p>24h Volume: {nft.volume_24h?.usd}</p>
        </div>
      ))}
    </div>
  );
};

export default TopMarketCapNFTs;
