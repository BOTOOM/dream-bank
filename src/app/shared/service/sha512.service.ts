import { Injectable } from '@angular/core';
import * as sha512 from 'js-sha512';

@Injectable({
  providedIn: 'root'
})
export class Sha512Service {

  constructor() { }
  encrypt(plainText: string) {
    return sha512.sha512(plainText);
  }
}
