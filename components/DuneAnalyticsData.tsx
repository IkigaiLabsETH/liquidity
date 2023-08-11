import React, { useEffect, useState } from 'react';
import { fetchDataFromDune } from '../lib/dune';

interface DuneData {
  total_users: number;
  total_sales: number;
  total_volume: number;
}

const DuneAnalyticsData: React.FC = () => {
  const [data, setData] = useState<DuneData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDuneData = async () => {
      const result = await fetchDataFromDune();
      setData(result.data);
      setError(result.error);
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
