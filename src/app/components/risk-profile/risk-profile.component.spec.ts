import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskProfileComponent } from './risk-profile.component';
import { CalcHeightPipe } from 'src/app/pipes/calc-height/calc-height.pipe';

describe('RiskProfileComponent', () => {
  let component: RiskProfileComponent;
  let fixture: ComponentFixture<RiskProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskProfileComponent, CalcHeightPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event', () => {
    spyOn(component.valueChange, 'emit');

    const riskBar = fixture.nativeElement.querySelector('.level-11');
    riskBar.dispatchEvent(new Event('click'));

    expect(component.valueChange.emit).toHaveBeenCalledWith(11);
  });
});
