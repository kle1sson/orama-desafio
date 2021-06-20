import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  minimumApplicationValue = {
    min: 0,
    max: 18,
  };
  retrievalDaysValue = {
    min: 0,
    max: 43,
  };

  getValueSlider(value: number) {
    return value;
  }
}
