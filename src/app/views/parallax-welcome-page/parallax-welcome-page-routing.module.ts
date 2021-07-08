import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { ParallaxWelcomePageComponent } from './parallax-welcome-page.component';

const routes: Routes = [
  {path: '', component: ParallaxWelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParallaxWelcomePageRoutingModule {
}
