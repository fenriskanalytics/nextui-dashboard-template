// Types for CashFlowGrowth
export interface CashFlowGrowth {
    symbol: string;
    date: string;
    period: string;
    calendarYear: number;
    growthNetIncome: number;
    growthDepreciationAndAmortization: number;
    growthStockBasedCompensation: number;
    growthChangeInWorkingCapital: number;
    growthAccountsReceivables: number;
    growthInventory: number;
    growthAccountsPayables: number;
    growthOtherWorkingCapital: number;
    growthOtherNonCashItems: number;
    growthNetCashProvidedByOperatingActivities: number;
    growthInvestmentsInPropertyPlantAndEquipment: number;
    growthAcquisitionsNet: number;
    growthPurchasesOfInvestments: number;
    growthSalesMaturitiesOfInvestments: number;
    growthNetCashUsedForInvestingActivities: number;
    growthDebtRepayment: number;
    growthCommonStockIssued: number;
    growthCommonStockRepurchased: number;
    growthDeferredIncomeTax: number;
    growthDividendsPaid: number;
    growthNetCashUsedProvidedByFinancingActivities: number;
    growthEffectOfForexChangesOnCash: number;
    growthNetChangeInCash: number;
    growthCashAtEndOfPeriod: number;
    growthCashAtBeginningOfPeriod: number;
    growthOperatingCashFlow: number;
    growthCapitalExpenditure: number;
    growthFreeCashFlow: number;
    updatedAt: string;
    createdAt: string;
    growthOtherInvestingActivites: number;
    growthOtherFinancingActivites: number;
}
