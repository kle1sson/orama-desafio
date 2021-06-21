import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrls: ['./risk-profile.component.scss'],
})
export class RiskProfileComponent implements OnInit {
  levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  levelActive!: number;
  maxLevel: number = this.levels[this.levels.length - 1];

  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.setLevelActive(this.maxLevel);
  }

  setLevelActive(level: number) {
    this.levelActive = level;
  }

  onChangeValue(level: number) {
    this.valueChange.emit(level);
  }

  validate(level: number, levelActive: number, type: string): boolean {
    const typeValidation: {
      [key: string]: boolean;
    } = {
      equal: level === levelActive,
      lesser: level <= levelActive,
      greater: level > levelActive,
    };

    return typeValidation[type];
  }
}
