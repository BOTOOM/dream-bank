import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAccount from '../reducers/account.reducer';

export const selectAccountState = createFeatureSelector<fromAccount.State>(
  fromAccount.accountFeatureKey
);

export const getAccounts = createSelector(
  selectAccountState,
  (state: fromAccount.State) => state.Accounts
);

export const getSelectedAccounts = createSelector(
  selectAccountState,
  (state: fromAccount.State) => state.SelectedAccound
);

export const getTransactions = createSelector(
  selectAccountState,
  (state: fromAccount.State) => state.Transactions
);

export const getSelectedTransactions = createSelector(
  selectAccountState,
  (state: fromAccount.State) => state.SelectecTransaction
);