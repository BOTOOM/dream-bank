import { Component, OnInit } from '@angular/core';
import { CookieHandlerService } from 'src/app/shared/service/cookie-handler.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  date= new Date();
  dataUser: any;

  constructor(
    private cookieHandlerService: CookieHandlerService,
  ) { }

  ngOnInit(): void {
    this.dataUser = this.cookieHandlerService.getUserCookie();
  }

}
