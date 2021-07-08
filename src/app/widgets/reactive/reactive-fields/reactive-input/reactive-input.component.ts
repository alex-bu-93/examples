import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractReactive }                       from '../abstract-reactive';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styles: [`:host { display: block }`]
})
export class ReactiveInputComponent extends AbstractReactive {
  @Input() maxLength: number;
  @Input() type: string;
  @Output() enterPress = new EventEmitter();
}
