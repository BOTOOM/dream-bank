import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieHandlerService } from '../../service/cookie-handler.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(
    private cookieHandlerService: CookieHandlerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  Logout() {
    this.cookieHandlerService.deleteCookie('UserCookie')
    this.router.navigate(['/login']);

  }

}
