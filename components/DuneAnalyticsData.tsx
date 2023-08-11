'use client'

import React, { useEffect, useState } from 'react';
import { fetchDataFromDune } from '../lib/dune';

interface DuneData {
  total_users: number;
  total_sales: number;
  total_volume: number;
}

const DuneAnalyticsData: React.FC = () => {
  const [data, setData] = useState<DuneData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDuneData = async () => {
      try {
        const fetchedData: any = await fetchDataFromDune();
        
        if (Array.isArray(fetchedData)) {
          const refinedData: DuneData[] = fetchedData.map(item => ({
            total_users: item.total_users as number,
            total_sales: item.total_sales as number,
            total_volume: item.total_volume as number,
            // ... other fields you expect from Dune Analytics
          }));
          setData(refinedData);
        } else {
          console.error("Unexpected data structure from Dune:", fetchedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDuneData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <main>
      {data.map((item, index) => (
        <div key={index}>
          <h2>NFT SALES: USD{item.total_sales.toLocaleString()}</h2>
          <h2>COLLECTORS: {item.total_users.toLocaleString()}</h2>
          <h2>VOLUME NFT: ETH{item.total_volume.toLocaleString()}</h2>
        </div>
      ))}
    </main>
  );
};

export default DuneAnalyticsData;