import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogIn: boolean = false;
  loggedUser: string;
  showRegistration: boolean;

  constructor(private authService: AuthService,
  	          private flashMessagesService: FlashMessagesService,
  	          private router: Router,
              private settingsService: SettingsService) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth =>{
  		if(auth) {
  			this.isLogIn = true;
        this.loggedUser = auth.email;
  		} else {
  			this.isLogIn = false;
  		}
  	});

    this.showRegistration = this.settingsService.getSettings().allowRegisteration;
  }

  onLogoutClick() {
  	this.authService.logout();
  	this.router.navigate(['/login']);
  	this.flashMessagesService.show("登出成功！", {cssClass: 'alert-success', timeout: 3000});
  }

}
