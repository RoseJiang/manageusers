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

}
