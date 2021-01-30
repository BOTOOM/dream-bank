import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AllAcountsComponent,
  },
  {
    path: 'transaction',
    component: TransactionComponent,
  },
  {
    path: 'transaction-detail',
    component: TransactionDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
