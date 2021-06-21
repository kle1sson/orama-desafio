import { Component, OnInit, Input } from '@angular/core';

import { FundsListService } from './service/funds-list.service';
import { Fund, FundFiltered } from './funds.model';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html',
  styleUrls: ['./funds-list.component.scss'],
})
export class FundsListComponent implements OnInit {
  constructor(private fundService: FundsListService) {}

  fixedIncome!: FundFiltered[];
  mixedStrategy!: FundFiltered[];
  variableIncome!: FundFiltered[];

  @Input() filterValue!: number;

  ngOnInit(): void {
    this.getFundsList();
  }

  getFundsList() {
    this.fundService.getFunds().subscribe((fundList: Fund[]) => {
      this.fixedIncome = this.getFundsListByMacroId(fundList, 1);
      this.mixedStrategy = this.getFundsListByMacroId(fundList, 2);
      this.variableIncome = this.getFundsListByMacroId(fundList, 3);
    });
  }

  getFundsListByMacroId(fundsList: Fund[], id: number) {
    const filteredList = fundsList.filter(
      (fund: Fund) => fund.specification.fund_macro_strategy.id === id
    );

    return filteredList.map((fund) => {
      return {
        simpleName: fund.simple_name,
        fundType: fund.specification.fund_type,
        fundClass: fund.specification.fund_class,
        quotaDate: fund.quota_date,
        rentabilityMonth: fund.profitabilities.month,
        rentabilityYear: fund.profitabilities.year,
        rentabilityM12: fund.profitabilities.m12,
        fundRiskProfile: fund.specification.fund_risk_profile.score_range_order,
        macroStrategy: fund.specification.fund_macro_strategy.name,
        mainStrategy: fund.specification.fund_main_strategy_name,
        minimumApplication: fund.operability.minimum_balance_permanence,
        retrievalQuotationDays: fund.operability.retrieval_quotation_days,
      };
    });
  }
}
