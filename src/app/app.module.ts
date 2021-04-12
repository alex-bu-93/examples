import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { registerLocaleData }      from '@angular/common';
import en                          from '@angular/common/locales/en';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US }          from 'ng-zorro-antd/i18n';
import { DoubleSiderLayoutModule } from './views/double-sider-layout';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';

registerLocaleData(en);

const BROWSER_MODULES = [BrowserModule, BrowserAnimationsModule];
const VIEWS_MODULES = [
  DoubleSiderLayoutModule
];

@NgModule({
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BROWSER_MODULES,
    VIEWS_MODULES
  ],
  declarations: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
