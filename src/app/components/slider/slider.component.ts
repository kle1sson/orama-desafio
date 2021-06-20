import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() label!: string;
  @Input() min!: number;
  @Input() max!: number;
  @Input() value!: string;

  @Output() valueChange = new EventEmitter<number>();

  rangeValue!: number;

  constructor() {}

  ngOnInit() {
    this.rangeValue = this.max;
  }

  onChangeValue() {
    this.valueChange.emit(this.rangeValue);
  }
}
