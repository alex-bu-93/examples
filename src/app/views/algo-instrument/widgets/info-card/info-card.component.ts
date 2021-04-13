import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './info-card.component.html',
  styles: [`
    nz-card { background-color: #343844 }
    .text-light-dark { color: #7D8499 }
  `]
})
export class InfoCardComponent {
  @Input() title: string;
}
