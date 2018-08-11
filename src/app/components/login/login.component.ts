import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService,
  	          private router: Router,
  	          private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit() {
     this.authService.login(this.email, this.password).then(res=>{
          this.flashMessagesService.show("登录成功！", {cssClass: "alert-success", timeout: 3000});
          this.router.navigate(['/']);
     }).catch(err => {
         this.flashMessagesService.show(err.message, {cssClass: "alert-danger", timeout: 3000});
         this.router.navigate(['/login']);
     });
  }

}
