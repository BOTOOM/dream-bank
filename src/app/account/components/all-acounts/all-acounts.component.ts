import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-acounts',
  templateUrl: './all-acounts.component.html',
  styleUrls: ['./all-acounts.component.scss']
})
export class AllAcountsComponent implements OnInit {

  dataAccounts = [
    {
      Type: 'Savings',
      AccountName: '12455**** - Kaiser',
      Status: "Active",
      Currency: "USD",
      Balance: 200
    },
    {
      Type: 'Checking',
      AccountName: '54851**** - Wolfee',
      Status: "Active",
      Currency: "USD",
      Balance: 5872
    },
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  selectAccount(data) {
    console.log(data)
    this.router.navigate([`dashboard/account/transaction`]);

  }

}
