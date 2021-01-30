import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LogInForm: FormGroup;


  constructor(
    private fb: FormBuilder,

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
    // this.onLogin();
  }

}
