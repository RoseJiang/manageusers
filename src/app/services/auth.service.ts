import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email, password) {
  	return new Promise((resolve, reject) =>{
  		this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  		.then(userData=> resolve(userData), err => reject(err));
  	})
  }

  getAuth() {
  	return this.angularFireAuth.authState.map(authState => authState);
  }

  logout() {
  	return this.angularFireAuth.auth.signOut();
  }

  register(email, password) {
       return new Promise((resolve, reject) =>{
          this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
          .then(userData=> resolve(userData), err => reject(err));
        })
  } 

}
