import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
  	id: 1,
  	name: '',
  	phone: '',
    email: '',
    balance: 0
  };
  disabledBalanceOnAdd:boolean = true;
  constructor(private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  	this._flashMessagesService.show('请填写正确的信息！', { cssClass: 'alert-danger', timeout: 6000 });
  }

  onSubmit({value, valid}: {value: User, valid:boolean}) {
     console.log(value);
     //console.log(valid);
     if(!valid){
     	console.log("验证失败");
     } else {
     	console.log("验证成功");
     }
  }

}
