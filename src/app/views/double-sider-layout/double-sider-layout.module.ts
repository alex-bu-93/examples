import { NgModule }                   from '@angular/core';
import { NzLayoutModule }             from 'ng-zorro-antd/layout';
import { NzMenuModule }               from 'ng-zorro-antd/menu';
import { NzIconModule }               from 'ng-zorro-antd/icon';
import { NzButtonModule }             from 'ng-zorro-antd/button';
import { NzTypographyModule }         from 'ng-zorro-antd/typography';
import { DoubleSiderLayoutComponent } from './double-sider-layout.component';
import { CommonModule }               from '@angular/common';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzButtonModule,
  NzTypographyModule
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [DoubleSiderLayoutComponent]
})
export class DoubleSiderLayoutModule {
}
