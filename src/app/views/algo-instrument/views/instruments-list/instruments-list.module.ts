import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { AgGridModule }               from 'ag-grid-angular';
import { InstrumentsListComponent }   from './instruments-list.component';

const GRID_COMPONENTS = [];
const ANT_DESIGN_MODULES = [];

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents(GRID_COMPONENTS),
    ANT_DESIGN_MODULES
  ],
  declarations: [InstrumentsListComponent]
})
export class InstrumentsListModule {
}
