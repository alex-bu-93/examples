import { NgModule }                    from '@angular/core';
import { NzLayoutModule }              from 'ng-zorro-antd/layout';
import { InstrumentsListModule }       from './views/instruments-list';
import { DetailedViewModule }          from './views/detailed-view';
import { AlgoInstrumentRoutingModule } from './algo-instrument-routing.module';
import { AlgoInstrumentComponent }     from './algo-instrument.component';

const ANT_DESIGN_MODULES = [NzLayoutModule];
const VIEWS_MODULES = [InstrumentsListModule, DetailedViewModule];

@NgModule({
  imports: [
    AlgoInstrumentRoutingModule,
    VIEWS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [AlgoInstrumentComponent]
})
export class AlgoInstrumentModule {
}
