"use client";

import axios from 'axios';

// Define a type for the stock data expected from the API
interface Stock {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
}

// Define a type for the items to be used in the Autocomplete component
export interface AutocompleteItemData {
  label: string;
  value: string;
  description?: string;
}

const fetchData = async (query: string): Promise<AutocompleteItemData[]> => {
  try {
    const response = await axios.get<Stock[]>(`${process.env.NEXT_PUBLIC_FMP_URL}/search`, {
      params: {
        query: query,
        apikey: process.env.NEXT_PUBLIC_FMP_API_KEY
      }
    });

    // Map the response to match the format of AutocompleteItemData
    const formattedItems: AutocompleteItemData[] = response.data.map(stock => ({
      label: stock.name, // Use stock name as label
      value: stock.symbol, // Use stock symbol as value
      description: `${stock.currency} - ${stock.stockExchange}` // Custom description
    }));

    return formattedItems;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchData;
