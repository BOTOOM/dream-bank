import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './effects/login.effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class AuthModule { }
