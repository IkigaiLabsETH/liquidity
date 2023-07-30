// components/DailyFees.tsx

import React, { useEffect, useState } from 'react';
import { fetchDailyFees } from '../lib/defillama';

const DailyFees: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const defillamaId = '1027'; // Ethereum's defillamaId
    const fetchData = async () => {
      try {
        const dailyFeesData = await fetchDailyFees(defillamaId);
        setData(dailyFeesData);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error('Error fetching daily fees:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h2>Daily Fees for Ethereum</h2>
      {data?.length > 0 ? (
        <ul>
          {data.map((entry) => (
            <li key={entry[0]}>
              Date: {new Date(entry[0] * 1000).toISOString().split('T')[0]}, Fees: {entry[1]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DailyFees;
