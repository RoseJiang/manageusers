import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
  	name: '',
  	phone: '',
    email: '',
    balance: 0
  };
  disabledBalanceOnAdd:boolean = true;
  constructor(private _flashMessagesService: FlashMessagesService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {

  }

  onSubmit({value, valid}: {value: User, valid:boolean}) {
     //console.log(value);
     //console.log(valid);
     if(!valid){
     	//console.log("验证失败");
     	this._flashMessagesService.show('请填写正确的信息！', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(["/add-user"]);
     } else {
     	//console.log("验证成功");
       
       this.userService.newUser(this.user).subscribe(user =>{
         //console.log(user);
         this._flashMessagesService.show('信息正确！', { cssClass: 'alert-success', timeout: 3000 });
         this.router.navigate(["/"]);
       });
       
     }
  }

}
