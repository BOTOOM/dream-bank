import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BankRoutingModule } from './bank-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    SharedModule,
    BankRoutingModule
  ]
})
export class BankModule { }
