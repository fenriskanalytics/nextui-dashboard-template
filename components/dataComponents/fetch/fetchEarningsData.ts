import axios from "axios";
import { EarningsData } from "../types/fmp/types-EarningsData";

export const fetchEarningsData = async (
  symbol: string,
): Promise<EarningsData[]> => {
  const API_KEY = process.env.REACT_APP_FINANCIAL_MODELING_PREP_API_KEY;
  const response = await axios.get<EarningsData[]>(
    `https://financialmodelingprep.com/api/v3/historical/earning_calendar/${symbol}?apikey=${API_KEY}`,
  );
  return response.data;
};
