import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { NzCardModule }      from 'ng-zorro-antd/card';
import { InfoCardComponent } from './info-card.component';

const ANT_DESIGN_MODULES = [
  NzCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  exports: [InfoCardComponent],
  declarations: [InfoCardComponent]
})
export class InfoCardModule {
}
