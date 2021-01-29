import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    component: AllAcountsComponent,
  },
  {
    path: 'transaction',
    component: TransactionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
