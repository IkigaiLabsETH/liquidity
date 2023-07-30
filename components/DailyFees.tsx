// components/DailyFees.tsx

import React, { useEffect, useState } from 'react';
import { fetchDailyFees } from '../lib/defillama';

const DailyFees: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const defillamaId = '1027'; // Ethereum's defillamaId
    const fetchData = async () => {
      try {
        const dailyFeesData = await fetchDailyFees(defillamaId);
        setData(dailyFeesData);
      } catch (error) {
        // Handle error
        console.error('Error fetching daily fees:', error);
      }
    };

    fetchData();
  }, []);

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
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DailyFees;
