import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
  	          private router: Router,
  	          private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

  }

  onSubmit() {
     this.authService.register(this.email, this.password).then(res=>{
          this.flashMessagesService.show("注册成功！", {cssClass: "alert-success", timeout: 3000});
          this.router.navigate(['/']);
     }).catch(err => {
         this.flashMessagesService.show(err.message, {cssClass: "alert-danger", timeout: 3000});
         this.router.navigate(['/register']);
     });
  }

}
