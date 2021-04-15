import { ColDef, ColGroupDef } from 'ag-grid-community/dist/lib/entities/colDef';
import last                    from 'lodash-es/last';
import first                   from 'lodash-es/first';


export const COLUMN_DEFS: (ColDef | ColGroupDef)[] = [
  {
    headerName: 'ACTION',
    children: [
      {field: ''}
    ]
  },
  {
    headerName: 'MAIN',
    children: [
      {field: 'Active Orders'},
      {field: 'Security'},
      {field: 'Short Name'},
      {field: 'Term'},
    ]
  },
  {
    headerName: 'LIMIT',
    children: [
      {field: 'Buy'},
      {field: 'Sell'},
    ]
  },
  {
    headerName: 'ACCOUNT',
    children: [
      {field: 'Bid'},
      {field: 'Ask'},
    ]
  },
  {
    headerName: 'BOOK',
    children: [
      {field: 'Bid'},
      {field: 'Ask'},
    ]
  },
  {
    headerName: 'ALM',
    children: [
      {field: 'Bid'},
      {field: 'Ask'},
    ]
  },
  {
    headerName: 'MM',
    groupId: 'mm',
    children: [
      {field: 'MM'},
      {field: 'Bid Rate'},
      {field: 'Bid Volume'},
      {field: 'Buy Limit'},
      {field: 'Buy Done'},
      {field: 'Ask Rate'},
      {field: 'Ask Volume'},
      {field: 'Sell Limit'},
      {field: 'Sell Done'},
      {field: 'Timer'},
      {field: 'Remaining'}
    ]
  },
  {
    headerName: 'FR BID',
    groupId: 'frbid',
    children: [
      {field: 'FR Bid'},
      {field: 'Spread'},
      {field: 'Max Book'},
      {field: 'Max Traded Volume'},
      {field: 'Max Rate'},
      {field: 'Min Rate'},
      {field: 'Multiply'},
      {field: 'Split Volume'},
      {field: 'Min Size'},
      {field: 'Buy Done'}
    ]
  },
  {
    headerName: 'FR ASK',
    groupId: 'frask',
    children: [
      {field: 'FR ASK'},
      {field: 'Spread'},
      {field: 'Max Book'},
      {field: 'Max Traded Volume'},
      {field: 'Max Rate'},
      {field: 'Min Rate'},
      {field: 'Multiply'},
      {field: 'Split Volume'},
      {field: 'Min Size'},
      {field: 'Sell Done'}
    ]
  },
  {
    headerName: 'HITTER ASK',
    groupId: 'hitterask',
    children: [
      {field: 'Hitter Ask'},
      {field: 'Rate'},
      {field: 'Limit'},
      {field: 'Min Size'},
      {field: 'Sell Done'}
    ]
  },
  {
    headerName: 'HITTER BID',
    groupId: 'hitterbid',
    children: [
      {field: 'Hitter Bid'},
      {field: 'Rate'},
      {field: 'Limit'},
      {field: 'Min Size'},
      {field: 'Buy Done'}
    ]
  },
  {
    headerName: 'RATE',
    children: [
      {field: 'Min'},
      {field: 'Max'}
    ]
  },
  {
    headerName: 'TOTAL CASH',
    children: [
      {field: 'Borrow'},
      {field: 'Lend'}
    ]
  },
  {
    headerName: 'CASH LIMIT',
    children: [
      {field: 'Borrowed'},
      {field: 'Lent'}
    ]
  },
  {
    headerName: 'INV.',
    children: [
      {field: 'Bought'},
      {field: 'Sold'},
      {field: 'Net'}
    ]
  },
  {
    headerName: 'CASH',
    children: [
      {field: 'Borrowed'},
      {field: 'Lent'},
      {field: 'Net'}
    ]
  },
  {
    headerName: 'AVG.CASH RATE',
    children: [
      {field: 'Borrowed'},
      {field: 'Lent'}
    ]
  },
  {
    headerName: 'VOLUME TRADED',
    children: [
      {field: 'Lots'},
      {field: 'Cash'}
    ]
  },
  {
    headerName: 'OTHER',
    children: [
      {field: 'Currency'},
      {field: 'Exchange'},
      {field: 'PnL'},
      {field: 'Wav Price'}
    ]
  }
];


const HEADER_GROUP_BG = {
  mm: 'col-group-bg-color-1',
  frbid: 'col-group-bg-color-2',
  frask: 'col-group-bg-color-3',
  hitterask: 'col-group-bg-color-4',
  hitterbid: 'col-group-bg-color-5'
};

export const isFirstColumn = column => column.colId === first(column.parent.displayedChildren)?.colId;
export const isLastColumn = column => column.colId === last(column.parent.displayedChildren)?.colId;
export const getColGroupClass = ({columnGroup}) => HEADER_GROUP_BG[columnGroup.groupId] || 'col-group-bg-color-default';
const getBordersClass = column => [
  isFirstColumn(column) && `col-group-border-color-bound-left`,
  isLastColumn(column) && `col-group-border-color-bound-right`
].filter(Boolean).join(' ');
export const getColClass = ({column}) => [
  column.parent?.groupId && `${HEADER_GROUP_BG[column.parent?.groupId]}-light`,
  getBordersClass(column),
].filter(Boolean).join(' ');
export const getCellClass = cell => getBordersClass(cell.columnApi.getColumn(cell.colDef));
