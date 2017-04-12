import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list.component';
import { ListService } from './components/services/list.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, ListComponent],
  providers: [ListService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
