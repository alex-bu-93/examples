import {
  AfterContentInit,
  EventEmitter,
  Injectable,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  Directive
}                               from '@angular/core';
import { Input, DoCheck }       from '@angular/core';
import { AbstractControl }      from '@angular/forms';
import { hasRequiredValidator } from '../reactive-funcs';

@Directive()
@Injectable()
export abstract class AbstractReactive
  implements OnChanges, AfterContentInit, DoCheck {

  /**
   * fieldId is a unique field characteristic
   * Example: 'email', 'password'
   */
  @Input() fieldId: string;

  /**
   * control is a reactive form validator/value controller
   *    ---IS A REQUIRED PROPERTY---
   */
  @Input() control: AbstractControl;

  /**
   * label is a custom text for label
   */
  @Input() label: string;

  /**
   * Tooltip is some text which appear on hover info-icon next to label
   */
  @Input() tooltip: string | TemplateRef<void>;

  /**
   * hasRequiredIndicator is flag to notify user that this field is required to fill
   * Red star indicator*
   */
  @Input() hasRequiredIndicator: boolean;

  /**
   * Input Placeholder is a text inside of the input field
   */
  @Input() placeholder: string;

  /**
   * flag to cancel field's margin bottom
   */
  @Input() noMarginBottom: boolean;

  @Input() noValidation: boolean;

  @Output() valueChange = new EventEmitter();

  validationErrors: object;

  ngOnChanges({isDisabled}: SimpleChanges): void {
    if (isDisabled) this.control[isDisabled.currentValue ? 'disable' : 'enable']();
  }

  ngAfterContentInit(): void {
    this.hasRequiredIndicator = this.hasRequiredIndicator !== false && hasRequiredValidator(this.control);
  }

  ngDoCheck(): void {
    const {touched, invalid, errors} = this.control;
    this.validationErrors = touched && invalid && errors;
  }
}

