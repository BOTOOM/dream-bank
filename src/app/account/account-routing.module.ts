import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';

const routes: Routes = [
  {
    path: '',
    component: AllAcountsComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
