import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountService } from '../service/account.service';
import { Account } from '../models/account.model';
import { Transaction } from '../models/transaction.model';

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
                let AccountObj: Account[] = []
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
                return AccountActions.loadAccountsFailure({ error: 'No accounts' });
              }
            }),
            catchError(data => {
              return of(AccountActions.loadAccountsFailure(data));
            }
            ))
      )
    );
  });

  loadTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadTransactions),
      mergeMap((Account) =>
        this.accountService.getTransaction(Account.Id)
          .pipe(
            map(data => {
              if (data.size > 0) {
                let TransactionObj: Transaction[] = []
                data.forEach((doc) => {
                  const TransactionAux: any = doc.data()
                  TransactionObj.push({
                    AccountId: TransactionAux.AccountId,
                    Balance: TransactionAux.Balance,
                    Date: TransactionAux.Date,
                    Description: TransactionAux.Description,
                    Status: TransactionAux.Status,
                    Taxes: TransactionAux.Taxes,
                    Value: TransactionAux.Value,
                    Currency: TransactionAux.Currency,
                    Id: String(doc.id),
                  })
                });
                return AccountActions.loadTransactions({ data: TransactionObj });
              } else {
                return AccountActions.loadAccountsFailure({ error: 'No transactions' });
              }
            }),
            catchError(data => {
              return of(AccountActions.loadAccountsFailure(data));
            }
            ))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }

}
