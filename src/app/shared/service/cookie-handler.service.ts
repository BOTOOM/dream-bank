import { Injectable } from '@angular/core';
import { User } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CookieHandlerService {

  constructor() { }

  setCookie(key: string, value: string){
    const dateExp = new Date();
    dateExp.setTime(dateExp.getTime() + (1 * 60 * 60 * 1000));
    document.cookie = `${key} = ${value}; expires=${dateExp.toUTCString()};`;
  }

  getCookie(name: string) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
  }

  deleteCookie(name: string) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 2000 00:00:01 GMT;';
  }

  getUserCookie(): User {
    let userCookie: any = this.getCookie('UserCookie');
    if (userCookie !== null) {
      userCookie = JSON.parse(userCookie) as User;
    }
    return userCookie;
  }
}
