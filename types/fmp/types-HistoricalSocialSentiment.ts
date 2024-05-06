// Types for HistoricalSocialSentiment
export interface HistoricalSocialSentiment {
    date: string;
    symbol: string;
    stocktwitsPosts: number;
    twitterPosts: number;
    stocktwitsComments: number;
    twitterComments: number;
    stocktwitsLikes: number;
    twitterLikes: number;
    stocktwitsImpressions: number;
    twitterImpressions: number;
    stocktwitsSentiment: number;
    twitterSentiment: number;
}