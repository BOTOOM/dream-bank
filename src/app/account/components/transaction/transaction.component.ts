import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  dataTransaction = [
    {
      Date: new Date(),
      Description: 'PAYMENT',
      Status: 'Acredited',
      Currency: "USD",
      Value: -2485,
      Balance: 2485
    },
    {
      Date: new Date(),
      Description: 'IVA',
      Status: 'Denied',
      Currency: 'USD',
      Value: 37895,
      Balance: 37895
    },
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  selectTransaction(data) {
    console.log(data)
    this.router.navigate([`dashboard/account/transaction-detail`]);

  }
}
