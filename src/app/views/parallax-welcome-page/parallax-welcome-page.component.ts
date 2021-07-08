import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators }                                   from '@angular/forms';
import { markTouchedAndScroll }                                                 from '@widgets/reactive/reactive-funcs';
import * as animation                                                           from 'angular-animations';
import Parallax                                                                 from 'parallax-js';
import { of }                                                                   from 'rxjs';

enum Tabs {
  Welcome = 0,
  Login = 1,
  Scopes = 2
}

interface Candle {
  top: string;
  width: number;
  isRendered?: boolean;
  isHover?: boolean;
}

const CANDLES: Candle[] = [
  {top: '0', width: 20},
  {top: '25px', width: 20},
  {top: '130px', width: 20},
  {top: '80px', width: 20},
  {top: '50px', width: 20},
  {top: '100px', width: 20},
  {top: '110px', width: 20},
  {top: '50px', width: 20},
  {top: '0', width: 20},
  {top: '-35px', width: 20},
  {top: '-90px', width: 20},
  {top: '-55px', width: 20},
  {top: '50px', width: 20},
  {top: '-45px', width: 20},
  {top: '50px', width: 20},
  {top: '-100px', width: 20}
];
const BOTTOM_ITEMS = [
  {type: 'i-euro', bottom: '15%', left: '10%', isRendered: false, timeout: 300},
  {type: 'pound', bottom: '30%', left: '23%', isRendered: false, timeout: 400},
  {type: 'sbet salut', bottom: '50%', left: '35%', isRendered: false, timeout: 450},
  {type: 'currency', bottom: '5%', left: '40%', isRendered: false, timeout: 400},
  {type: 'yuan', bottom: '5%', left: '65%', isRendered: false, timeout: 200},
  {type: 'dollar', bottom: '1%', left: '80%', isRendered: false, timeout: 150},
  {type: 'ruble', bottom: '55%', left: '80%', isRendered: false, timeout: 700}
];

@Component({
  selector: 'app-parallax-welcome-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parallax-welcome-page.component.html',
  styleUrls: [`./parallax-welcome-page.component.scss`],
  animations: [
    animation.bounceInUpAnimation(),
    animation.fadeInUpAnimation({duration: 1200, translate: '30px'}),
    animation.fadeOutUpAnimation({duration: 800, translate: '30px'}),
    animation.rotateInUpLeftAnimation({degrees: 200})
  ]
})
export class ParallaxWelcomePageComponent implements AfterViewInit {

  Tabs = Tabs;
  selectedTab = Tabs.Welcome;

  fg = new FormGroup({
    login: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  login$ = of({});
  scopes$ = of([]);

  CANDLES = CANDLES;
  BOTTOM_ITEMS = BOTTOM_ITEMS;

  error: string;

  isSwitchingTab = false;
  isHeaderRendered: boolean;
  isSloganRendered = false;
  is1WaveRendered: boolean;
  is2WaveRendered: boolean;
  is3waveRendered: boolean;
  isBottomLogoRendered = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    setTimeout(() => { this.isSloganRendered = true; this.cdr.markForCheck(); }, 100);
    setTimeout(() => {
      setTimeout(() => { this.is1WaveRendered = true; this.cdr.markForCheck(); }, 200);
      setTimeout(() => { this.is2WaveRendered = true; this.cdr.markForCheck(); }, 300);
      setTimeout(() => { this.is3waveRendered = true; this.cdr.markForCheck(); }, 400);
      setTimeout(() => { this.isBottomLogoRendered = true; this.cdr.markForCheck(); }, 400);
    }, 600);
    setTimeout(() => this.CANDLES.forEach((candle, index) =>
      setTimeout(() => { candle.isRendered = true; this.cdr.markForCheck(); }, index * 20)
    ), 200);
    setTimeout(() => { this.isHeaderRendered = true; this.cdr.markForCheck(); }, 1000);
    setTimeout(() => this.BOTTOM_ITEMS.forEach(item =>
      setTimeout(() => { item.isRendered = true; this.cdr.markForCheck(); }, item.timeout)
    ), 1000);
  }

  ngAfterViewInit(): void {
    const parallaxInstance = new Parallax(document.getElementById('scene'));
  }

  onSubmit(): void {
    if (this.fg.valid) {
      this.selectedTab = Tabs.Scopes;
      this.scopes$ = of([]);
    } else {
      markTouchedAndScroll(this.fg);
    }
  }

  onSwitchTab(): void {
    switch (this.selectedTab) {
      case Tabs.Welcome:
        this.isSwitchingTab = true;
        setTimeout(() => {
          this.isSwitchingTab = false;
          this.selectedTab = Tabs.Login;
          this.cdr.markForCheck();
        }, 800);
        break;
      case Tabs.Login:
        this.isSloganRendered = false;
        this.selectedTab = Tabs.Welcome;
        this.login$ = of({});
        setTimeout(() => {
          this.isSloganRendered = true;
          this.cdr.markForCheck();
        }, 0);
        break;
      case Tabs.Scopes:
        this.selectedTab = Tabs.Login;
        this.login$ = of({});
        break;
    }
  }
}
