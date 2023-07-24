// lib/coingecko.ts
import axios from 'axios';

export interface CryptoData {
  id: string;
  price: string;
  priceDiff: number;
}

export interface CryptoDataDisplay {
  id: string;
  price: string;
  priceDiff: string;
}

export async function fetchPrices(): Promise<CryptoDataDisplay[]> {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tezos,arweave&vs_currencies=usd'
  );

  const response2 = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tezos,arweave&sparkline=true'
  );

  if (response.status !== 200 || response2.status !== 200) {
    throw new Error('Failed to fetch prices');
  }

  const prices = response.data;
  const markets = response2.data;

  let data: CryptoData[] = ['bitcoin', 'ethereum', 'tezos', 'arweave'].map(id => {
    const marketData = markets.find(market => market.id === id);
    let priceDiff = 0;
    let price = 'N/A';

    if (marketData && marketData.sparkline_in_7d && marketData.sparkline_in_7d.price.length > 0) {
      const price7dAgo = marketData.sparkline_in_7d.price[0];
      if (prices[id]) {
        const priceNow = prices[id].usd;
        priceDiff = ((priceNow - price7dAgo) / price7dAgo * 100);
        price = `$${priceNow.toFixed(2)}`;
      }
    }

    return {
      id: id,
      price: price,
      priceDiff: priceDiff
    };
  });

  // Sort coins by performance
  data = data.sort((a, b) => b.priceDiff - a.priceDiff);

  // Convert priceDiff to string and store the result in a new array
  const displayData: CryptoDataDisplay[] = data.map(item => ({
    id: item.id,
    price: item.price,
    priceDiff: `${item.priceDiff.toFixed(2)}%`
  }));

  return displayData;
}

export async function fetchCryptoData(cryptoIds: string[]) {
  const ids = cryptoIds.join(",");
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
  );

  if (response.status !== 200) {
    throw new Error('Failed to fetch prices');
  }

  return response.data;
}

export async function fetchGlobalData() {
  const response = await axios.get('https://api.coingecko.com/api/v3/global');

  if (response.status !== 200) {
    throw new Error('Failed to fetch global data');
  }

  return response.data;
}


interface MarketData {
  current_price: {
    usd: number;
  };
  price_change_percentage_24h: number;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_percentage_24h: number;
  };
}

interface Item {
  id: string;
  symbol: string;
  name: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
}

interface CoinDetails {
  item: Item;
}

interface Trending {
  coins: CoinDetails[];
  exchanges: string[];
}

export async function fetchTrendingCoins(): Promise<Coin[]> {
  try {
    const trendingResponse = await axios.get<Trending>(
      'https://api.coingecko.com/api/v3/search/trending'
    );

    // Now for each trending coin, get detailed data
    const coinDataRequests = trendingResponse.data.coins.map(coin =>
      axios.get<Coin>(`https://api.coingecko.com/api/v3/coins/${coin.item.id}`)
    );
    const coinDataResponses = await Promise.all(coinDataRequests);
    
    // Extract the data from the responses
    const coins = coinDataResponses.map(response => response.data);
    
    return coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
}

