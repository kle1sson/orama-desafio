import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BackgroundPercentagePipe } from './pipes/background-percentage/background-percentage.pipe';
import { CalcHeightPipe } from './pipes/calc-height/calc-height.pipe';

import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { RiskProfileComponent } from './components/risk-profile/risk-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SliderComponent,
    BackgroundPercentagePipe,
    RiskProfileComponent,
    CalcHeightPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
