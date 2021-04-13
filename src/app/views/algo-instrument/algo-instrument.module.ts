import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { NzLayoutModule }          from 'ng-zorro-antd/layout';
import { NzIconModule }            from 'ng-zorro-antd/icon';
import { InfoCardModule }          from './widgets/info-card';
import { AlgoInstrumentComponent } from './algo-instrument.component';
import { NzProgressModule }        from 'ng-zorro-antd/progress';
import { NzDividerModule }         from 'ng-zorro-antd/divider';

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
    ANT_DESIGN_MODULES
  ],
  declarations: [AlgoInstrumentComponent]
})
export class AlgoInstrumentModule {
}
