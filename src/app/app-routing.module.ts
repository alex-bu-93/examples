import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DoubleSiderLayoutComponent }              from './views/double-sider-layout';

const routes: Routes = [
  {path: 'double-sider-layout', component: DoubleSiderLayoutComponent},
  {path: 'algo-instrument', loadChildren: () => import('./views/algo-instrument').then(m => m.AlgoInstrumentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
