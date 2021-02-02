import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getAccounts(userId) {
    return this.firestore
    .collection('Account', ref => ref.where('User', '==', `${userId}`)).get();
  }
}
