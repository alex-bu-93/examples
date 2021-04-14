import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { PerfectScrollbarModule }  from 'ngx-perfect-scrollbar';
import { NzLayoutModule }          from 'ng-zorro-antd/layout';
import { NzIconModule }            from 'ng-zorro-antd/icon';
import { NzProgressModule }        from 'ng-zorro-antd/progress';
import { NzDividerModule }         from 'ng-zorro-antd/divider';
import { InfoCardModule }          from './widgets/info-card';
import { AlgoInstrumentComponent } from './algo-instrument.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzIconModule,
  NzProgressModule,
  NzDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    InfoCardModule,
    PerfectScrollbarModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [AlgoInstrumentComponent]
})
export class AlgoInstrumentModule {
}
