import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { AppComponent } from './app.component';
import { BackgroundPercentagePipe } from './pipes/background-percentage/background-percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SliderComponent,
    BackgroundPercentagePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
