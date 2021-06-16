import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have search element', () => {
    const searchElement = fixture.nativeElement.querySelector('.search');

    expect(searchElement).toBeTruthy();
  });

  it('should have form element', () => {
    const formElement = fixture.nativeElement.querySelector('.search__form');

    expect(formElement).toBeTruthy();
  });

  it('should have input element', () => {
    const inputElement = fixture.nativeElement.querySelector('.search__input');

    expect(inputElement).toBeTruthy();
  });

  it('should have icon element', () => {
    const iconElement = fixture.nativeElement.querySelector('.search__icon');

    expect(iconElement).toBeTruthy();
  });
});
