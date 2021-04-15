import { ChangeDetectionStrategy, Component }              from '@angular/core';
import { ColumnApi, GridApi, GridOptions, GridReadyEvent }          from 'ag-grid-community';
import { COLUMN_DEFS, getCellClass, getColClass, getColGroupClass } from '../../constants/grid';

@Component({
  selector: 'app-instruments-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './instruments-list.component.html',
  styles: [`ag-grid-angular { height: calc(100% - 50px )}`]
})
export class InstrumentsListComponent {

  gridApi: GridApi;
  gridColumnApi: ColumnApi;

  gridOptions: GridOptions = {
    columnDefs: COLUMN_DEFS,
    groupHeaderHeight: 24,
    rowHeight: 32,
    colWidth: 80,
    rowData: Array.from({length: 300}).map(Object),
    suppressDragLeaveHidesColumns: true,
    defaultColGroupDef: {
      headerClass: getColGroupClass,
      marryChildren: true,
      children: null,
    },
    defaultColDef: {
      cellClass: getCellClass,
      headerClass: getColClass
    },
    onDisplayedColumnsChanged: ({api}) => { api.refreshHeader(); api.redrawRows(); }
  };

  onGridReady({api, columnApi}: GridReadyEvent): void {
    this.gridApi = api;
    this.gridColumnApi = columnApi;
  }
}
