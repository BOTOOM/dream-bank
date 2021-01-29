import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';


import { AccountRoutingModule } from './account-routing.module';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { TransactionComponent } from './components/transaction/transaction.component';


@NgModule({
  declarations: [AllAcountsComponent, StatusBarComponent, TransactionComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
