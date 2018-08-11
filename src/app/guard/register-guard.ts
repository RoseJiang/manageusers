import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGard implements CanActivate{

	constructor( private router: Router,
                 private settingsService: SettingsService) {
         
	}

    canActivate(): boolean {
         if(this.settingsService.getSettings().allowRegisteration){
            return true;
         }else{
            this.router.navigate(['/login']);
            return false;
         }
    }
}