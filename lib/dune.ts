// lib/dune.ts
'client'

import { QueryParameter, DuneClient } from "@cowprotocol/ts-dune-client";

const DUNE_API_KEY = process.env.DUNE_API_KEY;

export const duneClient = new DuneClient(DUNE_API_KEY ?? "");

const queryID = 1299312;
const parameters = [
  QueryParameter.number("Collectors", 2225509),
  QueryParameter.number("Volume ETH", 2225507),
  QueryParameter.number("Sales USD", 2225508)
];

export const fetchDataFromDune = async () => {
  try {
    const executionResult = await duneClient.refresh(queryID, parameters);
    return { data: executionResult.result?.rows, error: null };
  } catch (error) {
    console.error("Error fetching data from Dune:", error);
    return { data: null, error: 'Failed to fetch data from Dune Analytics' };
  }
};
