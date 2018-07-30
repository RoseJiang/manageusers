import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService} from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  disabledBalanceOnEdit: boolean = true;
  id: string;
  user: object;
  constructor(private route: ActivatedRoute, 
		  	private userService: UserService, 
		  	private router: Router,
		  	private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params.id;
  	this.userService.getUser(this.id).subscribe(user =>{
  		this.user = user;
  	});
  	this.disabledBalanceOnEdit = false;
  }

  onSubmit({value, valid}: {value: User, valid:boolean}) {

     if(!valid){
     	this._flashMessagesService.show('请填写正确的信息！', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(["/edit-user/" + this.id]);
     } else {
       
       this.userService.updateUser(this.id, value).subscribe(user =>{
         this._flashMessagesService.show('用户更新成功！', { cssClass: 'alert-success', timeout: 3000 });
         this.router.navigate(["/user/" + this.id]);
       });
       
     }
  }

}
