import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-algo-instrument',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './algo-instrument.component.html',
  styles: [`
    :host ::ng-deep .ant-progress-text { color: white }
    .text-light-dark { color: #7D8499 }
    .bg-light-dark { background-color: #7D8499 }
    .bg-dark-content { background-color: #2A2D36 }
  `]
})
export class AlgoInstrumentComponent {
}
