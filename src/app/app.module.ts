import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BackgroundPercentagePipe } from './pipes/background-percentage/background-percentage.pipe';
import { CalcHeightPipe } from './pipes/calc-height/calc-height.pipe';

import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { RiskProfileComponent } from './components/risk-profile/risk-profile.component';
import { FundsListComponent } from './components/funds-list/funds-list.component';
import { FormatDatePipe } from './pipes/format-date/format-date.pipe';
import { PercentagePipe } from './pipes/percentage/percentage.pipe';
import { FormatMoneyPipe } from './pipes/format-money/format-money.pipe';
import { RetrievalQuotationFormatPipe } from './pipes/retrieval-quotation/retrieval-quotation-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SliderComponent,
    BackgroundPercentagePipe,
    RiskProfileComponent,
    CalcHeightPipe,
    FundsListComponent,
    FormatDatePipe,
    PercentagePipe,
    FormatMoneyPipe,
    RetrievalQuotationFormatPipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
