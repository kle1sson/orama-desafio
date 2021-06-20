import {
  ComponentFixture,
  TestBed,
  async,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { FormsModule } from '@angular/forms';
import { BackgroundPercentagePipe } from 'src/app/pipes/background-percentage/background-percentage.pipe';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent, BackgroundPercentagePipe],
      imports: [FormsModule],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the value of input', () => {
    const props = {
      label: 'Testing input value',
      min: 0,
      max: 18,
    };

    component.label = props.label;
    component.min = props.min;
    component.max = props.max;

    const input = fixture.nativeElement.querySelector('input');
    const maxAttributeRange = props.max;
    input.value = maxAttributeRange;

    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe(maxAttributeRange.toString());
    expect(component.label).toBe(props.label);
    expect(component.min).toBe(props.min);
    expect(component.max).toBe(props.max);
  });

  it('should emit an event', () => {
    const props = {
      label: 'Testing emit an event',
      min: 0,
      max: 43,
    };

    component.label = props.label;
    component.min = props.min;
    component.max = props.max;

    spyOn(component.valueChange, 'emit');

    const input = fixture.nativeElement.querySelector('input');
    const maxAttributeRange = props.max;
    input.value = maxAttributeRange;

    input.dispatchEvent(new Event('input'));

    expect(component.valueChange.emit).toHaveBeenCalled();
    expect(component.label).toBe(props.label);
    expect(component.min).toBe(props.min);
    expect(component.max).toBe(props.max);
  });

  it('should change backgroude-size', async(() => {
    const props = {
      label: 'Testing backgroude-size',
      min: 0,
      max: 50,
    };

    component.label = props.label;
    component.min = props.min;
    component.max = props.max;

    spyOn(component.valueChange, 'emit');

    fixture.whenStable().then(() => {
      const input = fixture.nativeElement.querySelector('input');
      const maxAttributeRange = props.max;
      input.value = maxAttributeRange;

      input.dispatchEvent(new Event('input'));

      expect(getComputedStyle(input).backgroundSize).toBe('100%');
      expect(component.label).toBe(props.label);
      expect(component.min).toBe(props.min);
      expect(component.max).toBe(props.max);
    });
  }));
});
