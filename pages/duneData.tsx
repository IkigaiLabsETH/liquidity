// pages/duneData.tsx

import React, { FC, useState, useEffect } from 'react';
import { fetchDataFromDune } from '../lib/dune';

const DuneDataPage: FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const queryID = 1215383; // Replace with your actual query ID
    const parameters = [
      // Replace with your actual parameters
    ];

    fetchDataFromDune(queryID, parameters).then(setData);
  }, []);

  return (
    <div>
      <h1>Dune Analytics Data</h1>
      {/* Render your Dune data here */}
    </div>
  );
};

export default DuneDataPage;
