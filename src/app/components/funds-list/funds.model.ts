export interface Fund {
  simple_name: string;
  fund_type: string;
  fund_class: string;
  quota_date: string;
  profitabilities: {
    month: number;
    year: number;
    m12: number;
  };
  specification: {
    fund_risk_profile: {
      score_range_order: number;
    };
    fund_main_strategy_name: string;
    fund_macro_strategy: {
      id: number;
      name: string;
    };
    fund_main_strategy: {
      id: number;
    };
    fund_type: string;
    fund_class: string;
  };
  operability: {
    minimum_balance_permanence: string;
    retrieval_quotation_days: number;
  };
  fundRiskProfile: number;
  macroStrategy: string;
  mainStrategy: string;
  minimumApplication: string;
  retrievalQuotationDays: string;
}

export interface FundFiltered {
  simpleName: string;
  fundType: string;
  fundClass: string;
  quotaDate: string;
  rentabilityMonth: number;
  rentabilityYear: number;
  rentabilityM12: number;
  fundRiskProfile: number;
  macroStrategy: string;
  mainStrategy: string;
  minimumApplication: string;
  retrievalQuotationDays: number;
}
