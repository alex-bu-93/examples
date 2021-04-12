import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { registerLocaleData }      from '@angular/common';
import en                          from '@angular/common/locales/en';
import { FormsModule }             from '@angular/forms';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US }          from 'ng-zorro-antd/i18n';
import { AppComponent }            from './app.component';

registerLocaleData(en);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
