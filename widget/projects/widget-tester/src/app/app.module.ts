import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetLibModule } from 'widget-lib';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetLibModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
