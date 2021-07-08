import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Observable }                                                                 from 'rxjs';
import { tap }                                                                        from 'rxjs/operators';

@Component({
  selector: 'app-request-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './request-wrapper.component.html',
  styles: [`:host { width: 100% }`]
})
export class RequestWrapperComponent<T = any> implements OnChanges {

  @Input() request$: Observable<T>;
  @Output() retry = new EventEmitter();
  @Output() back = new EventEmitter();

  public data: T;

  ngOnChanges(): void {
    this.request$ = this.getUpdatedRequest(this.request$);
  }

  getUpdatedRequest = (request$: Observable<T>) => request$?.pipe(tap(res => this.data = res));
}
