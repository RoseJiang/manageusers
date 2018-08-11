import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';	
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGard implements CanActivate{

	constructor(private angularFireAuth:AngularFireAuth, private router: Router) {
         
	}

    canActivate() {
        return this.angularFireAuth.authState.map(auth => {
        	if(!auth) {
        		this.router.navigate(['/login']);
                return false;
        	} else {
        		return true;
        	}
        });
    }
}