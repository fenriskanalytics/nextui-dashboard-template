// src/types/RangeTypes.ts

export interface RangeType {
    keys: string[];  // Array of keys that map to the same date calculation
    label: string;  // Primary label for display
    fromDate: () => string;  // Function to calculate the 'from' date
    toDate: () => string;  // Function to calculate the 'to' date
}

const today = () => new Date().toISOString().split('T')[0];

const daysAgo = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
};

export const rangeTypes: RangeType[] = [
    { keys: ['5D', '5 Days'], label: 'Last 5 Days', fromDate: () => daysAgo(5), toDate: today },
    { keys: ['1M', '1 Month'], label: 'Previous Month', fromDate: () => daysAgo(30), toDate: today },
    { keys: ['3M', '3 Months'], label: 'Last 3 Months', fromDate: () => daysAgo(90), toDate: today },
    { keys: ['1Y', '1 Year'], label: 'Last Year', fromDate: () => daysAgo(365), toDate: today },
    { keys: ['3Y', '3 Years'], label: 'Last 3 Years', fromDate: () => daysAgo(3 * 365), toDate: today },
    { keys: ['5Y', '5 Years'], label: 'Last 5 Years', fromDate: () => daysAgo(5 * 365), toDate: today },
    { keys: ['10Y', '10 Years'], label: 'Last 10 Years', fromDate: () => daysAgo(10 * 365), toDate: today },
    { keys: ['Q1', '1st Quarter'], label: '1st Quarter', fromDate: () => new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0], toDate: () => new Date(new Date().getFullYear(), 2, 31).toISOString().split('T')[0] },
    { keys: ['Q2', '2nd Quarter'], label: '2nd Quarter', fromDate: () => new Date(new Date().getFullYear(), 3, 1).toISOString().split('T')[0], toDate: () => new Date(new Date().getFullYear(), 5, 30).toISOString().split('T')[0] },
    { keys: ['Q3', '3rd Quarter'], label: '3rd Quarter', fromDate: () => new Date(new Date().getFullYear(), 6, 1).toISOString().split('T')[0], toDate: () => new Date(new Date().getFullYear(), 8, 30).toISOString().split('T')[0] },
    { keys: ['Q4', '4th Quarter'], label: '4th Quarter', fromDate: () => new Date(new Date().getFullYear(), 9, 1).toISOString().split('T')[0], toDate: () => new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0] },
];

// Utility function to find a range by key
export const findRangeByKey = (key: string): RangeType | undefined => {
    return rangeTypes.find(range => range.keys.includes(key));
};
