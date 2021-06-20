import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { BackgroundPercentagePipe } from './pipes/background-percentage/background-percentage.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        SliderComponent,
        BackgroundPercentagePipe,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a page header element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const pageHeader = fixture.nativeElement.querySelector('.page-header');
    expect(pageHeader).toBeTruthy();
  });
});
