import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';


@NgModule({
  declarations: [
    AllAcountsComponent,
    TransactionComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
