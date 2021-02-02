import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sha512Service } from '../../../shared/service/sha512.service';
import { Store } from '@ngrx/store';
import { loadLogins } from '../../actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LogInForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private encrypt: Sha512Service,
    private store: Store<any>,

  ) { }

  ngOnInit(): void {
    this.LogInForm = this.fb.group({
      Document: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Password: ['', [Validators.required]],
    });
  }

  isInvalid(nombre: string) {
    const input = this.LogInForm.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  login() {
    console.log( this.LogInForm.value.Password )
    console.log( this.encrypt.encrypt(this.LogInForm.value.Password) )
    this.store.dispatch(loadLogins({
      user: this.LogInForm.value.Document,
      password: this.encrypt.encrypt(this.LogInForm.value.Password)
    }))
  }

}
