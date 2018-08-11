import { Injectable } from '@angular/core';
import { Settings } from '../models/settings';

@Injectable()
export class SettingsService {

	settings: Settings = {
		allowRegisteration: true,
		disabledOnAdd: false,
		disabledOnEdit: false,
		jsonserverURL: "http://rosejiang.com:3000"
	};

  constructor() { }

  getSettings() {
  	return this.settings;
  }


}
