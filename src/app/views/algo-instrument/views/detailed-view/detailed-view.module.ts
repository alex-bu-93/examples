import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule }           from '@angular/router';
import { NzIconModule }           from 'ng-zorro-antd/icon';
import { NzProgressModule }       from 'ng-zorro-antd/progress';
import { NzDividerModule }        from 'ng-zorro-antd/divider';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DetailedViewComponent }  from './detailed-view.component';
import { InfoCardModule }         from '../../widgets/info-card';

const ANT_DESIGN_MODULES = [
  NzIconModule,
  NzProgressModule,
  NzDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    RouterModule,
    PerfectScrollbarModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [DetailedViewComponent],
  exports: [DetailedViewComponent]
})
export class DetailedViewModule {
}
