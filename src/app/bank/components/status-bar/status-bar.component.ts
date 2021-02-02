import { Component, OnInit } from '@angular/core';
import { CookieHandlerService } from 'src/app/shared/service/cookie-handler.service';
import { User } from '../../../auth/models/user.model';
import {  } from '../../../account/models/account.model';
import { Store } from '@ngrx/store';
import { getAccounts } from 'src/app/account/selectors/account.selectors';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  date= new Date();
  dataUser: User;
  Balance: number = 0;

  constructor(
    private store: Store<any>,
    private cookieHandlerService: CookieHandlerService,
    ) { 
  }

  ngOnInit(): void {
    this.dataUser = this.cookieHandlerService.getUserCookie();
    this.store.select(getAccounts).subscribe( data => {
      if(data) {
        if (data.data) {
          const dataAccount: any[] = data.data
          this.Balance = dataAccount.reduce((accumulator, current) => accumulator + current.Balance, 0)
        }
      }
    } )
  }

}
