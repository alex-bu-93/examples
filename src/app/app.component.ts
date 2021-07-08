import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import cheetahGrid                                                              from 'cheetah-grid';

function item(index, asdasdqwe?): any {
  return {
    check: asdasdqwe || 'check' + index,
    personid: asdasdqwe || 'personid' + index,
    fname: asdasdqwe || 'fname' + index,
    lname: asdasdqwe || 'lname' + index,
    email: asdasdqwe || 'email' + index
  };
}


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button (click)="add()">add</button>
    <button (click)="deleteRows()">remove</button>
    <div class="grid-sample" style="height: 500px; border: solid 1px #ddd;"></div>
  `
})
export class AppComponent implements AfterViewInit {

  grid;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.grid = new cheetahGrid.ListGrid({
      parentElement: document.querySelector('.grid-sample'),
      header: [
        {field: 'check', caption: '', width: 50, columnType: 'check', action: 'check'},
        {field: 'personid', caption: 'ID', width: 100},
        {field: 'fname', caption: 'First Name', width: 200},
        {field: 'lname', caption: 'Last Name', width: 200},
        {field: 'email', caption: 'Email', width: 250},
      ],
      records: Array.from({length: 1000000}).map((x, i) => item(i)),
      frozenColCount: 2,
    });
    console.log(this.grid);
  }

  add(): void {
    this.grid.records.splice(2, 0, ...Array.from({length: 5}).map((x, i) => item(i + 30, 'asdasdqwe')));
    this.grid.invalidate();
    // this.grid.records = Array.from({length: 1000000}).map((x, i) => item(i + 1000))
  }

  deleteRows(): void {
    this.grid.records.splice(2, 5);
    this.grid.invalidate();
  }
}
