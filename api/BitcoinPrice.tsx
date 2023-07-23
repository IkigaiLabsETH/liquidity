// BitcoinPrice.tsx
import React, { useEffect, useState } from 'react';

interface CoinGeckoResponse {
    bitcoin: {
        usd: number;
    };
}

export const BitcoinPrice: React.FC = () => {
    const [bitcoinPrice, setBitcoinPrice] = useState<string | null>(null);

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
                const data: CoinGeckoResponse = await response.json();
                setBitcoinPrice(data.bitcoin.usd.toString());
            } catch (error) {
                console.error('Error:', error);
                setBitcoinPrice('Error loading price');
            }
        };

        fetchBitcoinPrice();
    }, []);

    return <p>Bitcoin Price: {bitcoinPrice}</p>;
};
