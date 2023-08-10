// lib/dune5.ts

import { QueryParameter, DuneClient } from "@cowprotocol/ts-dune-client";

const DUNE_API_KEY = process.env.DUNE_API_KEY;

export const duneClient = new DuneClient(DUNE_API_KEY ?? "");



// Exclude the debug logs from lower level dependency.
// console.debug = function () {};

export const response =  fetch('https://api.dune.com/api/v1/query/1299312/execute', {
    method: 'POST',
});

export const fetchDataFromDune = async (queryID: number, parameters: QueryParameter[]) => {
    try {
      const executionResult = await duneClient.refresh(queryID, parameters);
      return executionResult.result?.rows;
    } catch (error) {
      console.error("Error fetching data from Dune:", error);
      return null;
    }
  };



