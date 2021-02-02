import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  public IfStore(data: any) {
    console.log(data)
    if (data) {
      if ((Object.keys(data)[0] !== 'type') && (Object.keys(data)[0] !== 'id') ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
