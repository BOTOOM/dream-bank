import { createAction, props } from '@ngrx/store';

export const loadAccounts = createAction(
  '[Account] Get Accounts',
  props<any>()
);

export const loadSelectedAccounts = createAction(
  '[Account] Get Selected Accounts',
  props<any>()
);

export const loadTransactions = createAction(
  '[Account] Get Transactions',
  props<any>()
);

export const loadSelectedTransaction = createAction(
  '[Account] Get Selected Transactions',
  props<any>()
);

export const loadAccountsSuccess = createAction(
  '[Account] Load Accounts Success',
  props<{ data: any }>()
);

export const loadAccountsFailure = createAction(
  '[Account] Load Accounts Failure',
  props<{ error: any }>()
);

