import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
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
