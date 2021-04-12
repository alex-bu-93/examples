import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-double-sider-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './double-sider-layout.component.html'
})
export class DoubleSiderLayoutComponent {

  isCollapsed: boolean;

  itemsLvl1 = [
    {text: 'Oil', icon: 'bg-colors'},
    {text: 'Metals', icon: 'gold'},
    {text: 'Agro', icon: 'bug'},
    {text: 'Precious', icon: 'tag'},
    {text: 'Bulk', icon: 'filter'}
  ];

  itemsLvl2 = [
    {text: 'Deals', icon: 'bg-colors'},
    {text: 'Headge Order', icon: 'gold'},
    {text: 'Ticket / Templates', icon: 'bug'},
    {text: 'Pricing', icon: 'tag'},
    {text: 'Fixings', icon: 'filter'},
    {text: 'Calendars', icon: 'filter'}
  ];

}
