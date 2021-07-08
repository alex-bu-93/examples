import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-local-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="margin-top: 50px" class="animated-long fadeIn">
      <div class="spinner-centered">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./local-spinner.component.scss']
})
export class LocalSpinnerComponent {
}
