import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sha512Service } from '../../../shared/service/sha512.service';
import { LoginService } from '../../service/login.service';

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
    private loginService:LoginService

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
    this.loginService.login()
    .subscribe( (data) => {
      console.log(data.size)
      data.forEach((doc) => {
        console.log('entro')
        console.log(doc.data());
    });

    } )
  }

}
