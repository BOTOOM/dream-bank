import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  login(user) {
    return this.firestore
    .collection('User', ref => ref.where('Identification', '==', `${user.user}`)
    .where('Password', '==', `${user.password}`)).get();
  }
}
