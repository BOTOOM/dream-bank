import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieHandlerService } from 'src/app/shared/service/cookie-handler.service';
import { loadAccounts, loadSelectedAccounts } from '../../actions/account.actions';
import { getAccounts } from '../../selectors/account.selectors';
import { Account } from '../../models/account.model';
import { SharedService } from '../../../shared/service/shared.service';

@Component({
  selector: 'app-all-acounts',
  templateUrl: './all-acounts.component.html',
  styleUrls: ['./all-acounts.component.scss']
})
export class AllAcountsComponent implements OnInit {

  dataAccounts: Account[] = [
  ]

  constructor(
    private router: Router,
    private cookieHandlerService: CookieHandlerService,
    private store: Store<any>,
    private sharedService: SharedService
    ) {
          this.store.dispatch(loadAccounts( {id: this.cookieHandlerService.getUserCookie().id} ))
     }

  ngOnInit(): void {
    this.store.select(getAccounts).subscribe( data => {
      if (data.data) {
        this.dataAccounts = data.data
      }

    } )
  }

  selectAccount(data) {
    // console.log(data)
    this.store.dispatch(loadSelectedAccounts(data))
    this.router.navigate([`dashboard/account/transaction`]);
  }

}
