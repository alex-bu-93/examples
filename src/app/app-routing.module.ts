import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DoubleSiderLayoutComponent }              from './views/double-sider-layout';
import { AlgoInstrumentComponent }                 from './views/algo-instrument';

const routes: Routes = [
  {path: 'double-sider-layout', component: DoubleSiderLayoutComponent},
  {path: 'algo-instrument', component: AlgoInstrumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
