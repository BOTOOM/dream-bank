import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from '../actions/account.actions';

export const accountFeatureKey = 'account';

export interface State {
  Accounts: any
  SelectedAccound: any
  Transactions: any
  SelectecTransaction: any
}

export const initialState: State = {
  Accounts: null,
  SelectedAccound: null,
  Transactions: null,
  SelectecTransaction: null,
};


export const reducer = createReducer(
  initialState,

  on(AccountActions.loadAccounts, (state, action) => ({
    ...state, Accounts: state.Accounts = action
  })),
  on(AccountActions.loadAccountsSuccess, (state, action) => ({
    ...state, Accounts: state.Accounts = action
  })),
  on(AccountActions.loadAccountsFailure, (state, action) => state),

  on(AccountActions.loadSelectedAccounts, (state, action) => ({
    ...state, SelectedAccound: state.SelectedAccound = action
  })),

  on(AccountActions.loadTransactions, (state, action) => ({
    ...state, Transactions: state.Transactions = action
  })),

  on(AccountActions.loadSelectedTransaction, (state, action) => ({
    ...state, SelectecTransaction: state.SelectecTransaction = action
  })),
);

