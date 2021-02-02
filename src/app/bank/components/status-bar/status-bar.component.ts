import { Component, OnInit } from '@angular/core';
import { CookieHandlerService } from 'src/app/shared/service/cookie-handler.service';
import { User } from '../../../auth/models/user.model';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  date= new Date();
  dataUser: User;

  constructor(
    private cookieHandlerService: CookieHandlerService,
  ) { }

  ngOnInit(): void {
    this.dataUser = this.cookieHandlerService.getUserCookie();
  }

}
