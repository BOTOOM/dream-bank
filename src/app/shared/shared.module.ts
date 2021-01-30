import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ButtonBackComponent } from './components/button-back/button-back.component';


@NgModule({
  declarations: [
    MenuComponent,
    TopMenuComponent,
    ButtonBackComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedRoutingModule
  ],
  exports: [
    MenuComponent,
    TopMenuComponent,
    ButtonBackComponent,
  ]
})
export class SharedModule { }
