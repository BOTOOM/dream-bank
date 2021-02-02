import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map,  mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountService } from '../service/account.service';
import { Account } from '../models/account.model';

import * as AccountActions from '../actions/account.actions';



@Injectable()
export class AccountEffects {

  loadAccounts$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AccountActions.loadAccounts),
      mergeMap((UserId) =>
        this.accountService.getAccounts(UserId.id)
          .pipe(
            map(data => {
              if (data.size > 0) {
                let AccountObj: Account[] =[]
                data.forEach((doc) => {
                  const AccountAux: any = doc.data()
                  AccountObj.push({
                    Id: String(doc.id),
                    AccountName: AccountAux.AccountName,
                    Balance: AccountAux.Balance,
                    Currency: AccountAux.Currency,
                    Status: AccountAux.Status,
                    Type: AccountAux.Type,
                    User: AccountAux.User
                  })
                });
                return AccountActions.loadAccountsSuccess({ data: AccountObj });
              } else {
                // this.lauchModalError();
                return AccountActions.loadAccountsFailure({ error: 'No accounts' });
              }
            }),
            catchError(data => {
              // this.lauchModalError();
              return of(AccountActions.loadAccountsFailure(data));
            }
            ))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private accountService: AccountService
    ) {}

}
