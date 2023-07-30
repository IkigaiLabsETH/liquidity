// lib/defillama.ts

import axios from 'axios';

const API_BASE_URL = 'https://api.llama.fi';

export const fetchDailyFees = async (defillamaId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/summary/fees/${defillamaId}?dataType=dailyFees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching daily fees:', error);
    throw error;
  }
};

