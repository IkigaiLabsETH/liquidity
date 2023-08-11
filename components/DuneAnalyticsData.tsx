import React, { useEffect, useState } from 'react';
import { fetchDataFromDune } from '../lib/dune';

interface DuneData {
  total_users: number;
  total_sales: number;
  total_volume: number;
}

const DuneAnalyticsData: React.FC = async () => {
  const fetchDuneData = async () => {

      const queryID = 1299312; // Replace with your actual query ID
      const parameters = [
       // Replace with your actual parameters
      ];

      const fetchedData: any = await fetchDataFromDune(queryID, parameters);
      const refinedData: DuneData[] = fetchedData.map(item => ({
        total_users: item.total_users as number,
        total_sales: item.total_sales as number,
        total_volume: item.total_volume as number,
        // ... other fields you expect from Dune Analytics
      }));
      return refinedData;

  };

  const data = await fetchDuneData();

  if (!data) {
    return <p>Loading...</p>;
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
