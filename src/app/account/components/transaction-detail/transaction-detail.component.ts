import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  dataTransaction = {
    Date: new Date(),
    Description: 'PAYMENT',
    Status: 'Acredited',
    Currency: "USD",
    Value: -2485,
    Balance: 2485
  }

  constructor() { }

  ngOnInit(): void {
  }

}
