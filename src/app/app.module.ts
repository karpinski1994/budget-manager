import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { OperationsComponent } from './operations/operations.component';
import { HistoryComponent } from './history/history.component';

import { OperationService } from './services/operation.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    OperationsComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
