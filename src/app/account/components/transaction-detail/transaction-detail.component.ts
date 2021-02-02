import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getSelectedTransactions} from '../../selectors/account.selectors';
import { Transaction } from '../../models/transaction.model';


@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  dataTransaction: Transaction;

  constructor(
    private router: Router,
    private store: Store<any>,
  ) {
    this.store.select(getSelectedTransactions).subscribe(data => {
      if( data ){
        this.dataTransaction = data
      } else {
        this.router.navigate([`dashboard/account`]);
      }
    })
   }

  ngOnInit(): void {
  }

}
