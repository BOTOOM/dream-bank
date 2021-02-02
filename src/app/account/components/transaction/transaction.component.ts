import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadTransactions, loadSelectedTransaction } from '../../actions/account.actions';
import { getSelectedAccounts, getTransactions } from '../../selectors/account.selectors';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  dataTransaction: Transaction[] = []

  constructor(
    private router: Router,
    private store: Store<any>,

  ) { 
    this.store.select(getSelectedAccounts).subscribe(data => {
      if( data ){
        this.store.dispatch(loadTransactions(data))
      } else {
        this.router.navigate([`dashboard/account`]);
      }
    })
  }

  ngOnInit(): void {
    this.store.select(getTransactions).subscribe( dataTransactions => {
      if(dataTransactions) {
        if( dataTransactions.data ) {
          this.dataTransaction = dataTransactions.data
        }
      }
    } )
  }

  selectTransaction(data) {
    console.log(data)
    this.router.navigate([`dashboard/account/transaction-detail`]);

  }
}
