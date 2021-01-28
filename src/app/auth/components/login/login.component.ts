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

  get DocumentInvalid() {
    return this.LogInForm.get('Document').invalid  && this.LogInForm.get('Document').touched;
  }

  get PasswordInvalid() {
    return this.LogInForm.get('Password').invalid  && this.LogInForm.get('Password').touched;
  }

  login() {
    // this.onLogin();
  }

}
