import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { OperationsComponent } from './operations/operations.component';


const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'app', component: OperationsComponent  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

 }
