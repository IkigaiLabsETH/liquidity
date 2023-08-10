// components/DuneAnalyticsData.tsx

import React, { useEffect, useState } from 'react';
import { fetchDataFromDune } from '../lib/dune4';

interface DuneData {
  total_users: number;
  total_sales: number;
  total_volume: number;
  // ... other fields you expect from Dune Analytics
}

const DuneAnalyticsData: React.FC = () => {
  const [data, setData] = useState<DuneData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDuneData = async () => {
      try {
        const queryID = 1299312; // Replace with your actual query ID
        const parameters = [
         // Replace with your actual parameters
        ];
        
        const fetchedData: Record<string, unknown>[] = await fetchDataFromDune(queryID, parameters);
        const refinedData: DuneData[] = fetchedData.map(item => ({
          total_users: item.total_users as number,
          total_sales: item.total_sales as number,
          total_volume: item.total_volume as number,
          // ... other fields you expect from Dune Analytics
        }));
        setData(refinedData);
      } catch (error) {
        setError('Failed to fetch data from Dune Analytics');
      }
    };

    fetchDuneData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      {data.map((item, index) => (
        <div key={index}>
          <h2>USD: ${item.total_sales.toLocaleString()}</h2>
          <h2>COLLECTOR: ${item.total_users.toLocaleString()}</h2>
          <h2>VOLUME ETH: ${item.total_volume.toLocaleString()}</h2>
        </div>
      ))}
    </main>
  );
};

export default DuneAnalyticsData;
