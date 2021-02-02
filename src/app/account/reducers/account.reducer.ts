import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from '../actions/account.actions';

export const accountFeatureKey = 'account';

export interface State {
  Accounts: any

}

export const initialState: State = {
  Accounts: null
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

);

