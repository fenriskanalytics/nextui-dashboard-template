// Types for EarningsHistorical
export interface EarningsHistorical {
    date: string;
    symbol: string;
    eps: number;
    epsEstimated: number;
    time: string;
    revenue: number;
    revenueEstimated: number;
    updatedFromDate: string;
    fiscalDateEnding: string;
}