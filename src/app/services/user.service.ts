import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';	
import { SettingsService } from './settings.service';

@Injectable()
export class UserService{

	constructor(public http:Http, private settingsService: SettingsService) {

	}

	getUsers() {
		return this.http.get(this.settingsService.getSettings().jsonserverURL + "/users").map(res => res.json());
	}

    newUser(user) {
    	return this.http.post(this.settingsService.getSettings().jsonserverURL + "/users", user).map(res => res.json());
    }

    getUser(id) {
    	return this.http.get(this.settingsService.getSettings().jsonserverURL + "/users/" + id).map(res=> res.json());
    }

    updateUser(id,user) {
        return this.http.put(this.settingsService.getSettings().jsonserverURL + "/users/" + id, user).map(res=> res.json());
    }

    deleteUser(id) {
    	return this.http.delete(this.settingsService.getSettings().jsonserverURL + "/users/" + id).map(res=> res.json());
    }

}