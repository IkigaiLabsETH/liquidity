// lib/dune.ts

import { QueryParameter, DuneClient } from "@cowprotocol/ts-dune-client";

const DUNE_API_KEY = process.env.DUNE_API_KEY;

export const duneClient = new DuneClient(DUNE_API_KEY ?? "");

export const fetchDataFromDune = async (queryID: number, parameters: QueryParameter[]) => {
  try {
    const executionResult = await duneClient.refresh(queryID, parameters);
    return executionResult.result?.rows;
  } catch (error) {
    console.error("Error fetching data from Dune:", error);
    return null;
  }
};
