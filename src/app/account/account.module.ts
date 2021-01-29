import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';


import { AccountRoutingModule } from './account-routing.module';
import { AllAcountsComponent } from './components/all-acounts/all-acounts.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';


@NgModule({
  declarations: [AllAcountsComponent, StatusBarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
