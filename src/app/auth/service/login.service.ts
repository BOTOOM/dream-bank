import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  login() {
    // return this.firestore.collection('User').get();


    return this.firestore
    .collection('User', ref => ref.where('Identification', '==', '605284')
    .where('population', '>', 100000)).get();
  }
}
