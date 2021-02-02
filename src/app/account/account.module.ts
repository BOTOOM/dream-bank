import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromAccount from './reducers/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './effects/account.effects';


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
    AccountRoutingModule,
    StoreModule.forFeature(fromAccount.accountFeatureKey, fromAccount.reducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
