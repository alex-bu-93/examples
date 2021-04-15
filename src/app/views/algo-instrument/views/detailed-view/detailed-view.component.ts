import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-detailed-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detailed-view.component.html',
  styles: [`
    :host ::ng-deep .ant-progress-text { color: white }
    .text-light-dark { color: #7D8499 }
    .bg-light-dark { background-color: #7D8499 }
  `]
})
export class DetailedViewComponent {
}
