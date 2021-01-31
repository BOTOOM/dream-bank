import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

import * as LoginActions from '../actions/login.actions';

import { LoginService } from '../service/login.service';
import { CookieHandlerService } from '../../shared/service/cookie-handler.service';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffects {

  loadLogins$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(LoginActions.loadLogins),
      mergeMap((dataUser) =>
      this.loginService.login(dataUser)
        .pipe(
          map(data => {
            if (data.size > 0 ) {
              data.forEach((doc) => {
                    console.log(doc.data());
                    console.log(doc.id);
                    const usetObj = {
                      id: doc.id,
                      data: doc.data()
                    }
                    this.cookieHandlerService.setCookie('UserCookie', JSON.stringify(usetObj))
                    this.router.navigate(['/dashboard/account']);

                });
              return LoginActions.loadLoginsSuccess({ data });
            } else {
              this.lauchModalError();
              return LoginActions.loadLoginsSuccess({ data });
            }
          }),
          catchError(data => {
            this.lauchModalError();
            return of(LoginActions.loadLoginsFailure(data));
          }
          ))
    )
    );
  });



  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private cookieHandlerService: CookieHandlerService,
    private router: Router,
    ) {}

  lauchModalError() {
    Swal.fire({
      title: 'Login Error',
      text: 'Wrong document or password',
      icon: 'error',
      confirmButtonText: 'Accept',
    });
  }

}
