// components/DuneAnalyticsData.tsx

import React, { useEffect, useState } from 'react';
import { fetchDataFromDune } from '../lib/dune4';

interface DuneData {
  total_amount: number;
  total_value_usd: number;
  // ... other fields you expect from Dune Analytics
}

const DuneAnalyticsData: React.FC = () => {
  const [data, setData] = useState<DuneData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDuneData = async () => {
      try {
        const queryID = 1215383; // Replace with your actual query ID
        const parameters = [
          // Replace with your actual parameters
        ];
        
        const fetchedData: Record<string, unknown>[] = await fetchDataFromDune(queryID, parameters);
        const refinedData: DuneData[] = fetchedData.map(item => ({
          total_amount: item.total_amount as number,
          total_value_usd: item.total_value_usd as number,
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
    <div>
      <h2>Dune Analytics Data</h2>
      {data.map((item, index) => (
        <div key={index}>
          <h3>Item {index + 1}</h3>
          <p>Total Amount: {item.total_amount}</p>
          <p>USD: ${item.total_value_usd.toLocaleString()}</p>
          {/* Render other data fields here */}
        </div>
      ))}
    </div>
  );
};

export default DuneAnalyticsData;
