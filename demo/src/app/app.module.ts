import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxBootstrapMultiselectModule } from '../../../projects/ngx-bootstrap-multiselect/src';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { DummyComponent } from './dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxBootstrapMultiselectModule,
  ],
  providers: [
    DataService,
    provideZoneChangeDetection()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
