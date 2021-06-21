import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsListComponent } from './funds-list.component';
import { FundsListService } from './service/funds-list.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FundsListComponent', () => {
  let component: FundsListComponent;
  let fixture: ComponentFixture<FundsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundsListComponent],
      imports: [HttpClientTestingModule],
      providers: [FundsListService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
