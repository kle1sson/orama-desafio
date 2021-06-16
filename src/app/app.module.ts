import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
