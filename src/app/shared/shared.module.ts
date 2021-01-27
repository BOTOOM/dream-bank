import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    TopMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedRoutingModule
  ],
  exports: [
    MenuComponent,
    TopMenuComponent,
  ]
})
export class SharedModule { }
