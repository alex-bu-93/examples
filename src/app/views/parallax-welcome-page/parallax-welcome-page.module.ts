import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RequestWrapperModule }             from '@widgets/request-wrapper';
import { ReactiveInputModule }              from '@widgets/reactive/reactive-fields/reactive-input';
import { NzButtonModule }                   from 'ng-zorro-antd/button';
import { NzIconModule }                     from 'ng-zorro-antd/icon';
import { NzCardModule }                     from 'ng-zorro-antd/card';
import { ParallaxWelcomePageComponent }     from './parallax-welcome-page.component';
import { ParallaxWelcomePageRoutingModule } from './parallax-welcome-page-routing.module';

const REACTIVE_FIELDS_MODULES = [
  ReactiveInputModule
];
const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzIconModule,
  NzCardModule
];

@NgModule({
  imports: [
    ParallaxWelcomePageRoutingModule,
    CommonModule,
    RequestWrapperModule,
    REACTIVE_FIELDS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [ParallaxWelcomePageComponent]
})
export class ParallaxWelcomePageModule {
}
