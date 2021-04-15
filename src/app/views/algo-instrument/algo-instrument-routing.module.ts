import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { DetailedViewComponent }    from './views/detailed-view';
import { InstrumentsListComponent } from './views/instruments-list';
import { AlgoInstrumentComponent }  from './algo-instrument.component';

const routes: Routes = [
  {
    path: '', component: AlgoInstrumentComponent, children: [
      {path: '', component: InstrumentsListComponent},
      {path: ':id', component: DetailedViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgoInstrumentRoutingModule {
}
