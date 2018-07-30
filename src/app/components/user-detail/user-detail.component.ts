import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService} from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: string;
  user: object;
  hasBalance: boolean = false;
  updateBalanceInput: boolean = false;
  constructor(private route: ActivatedRoute, 
		  	private userService: UserService, 
		  	private router: Router,
		  	private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params["id"];
  	console.log("UserDetailComponent: " + this.id);
    this.userService.getUser(this.id).subscribe(user=> {
    	if(user.balance > 0) {
            this.hasBalance = true;
    	}
    	this.user = user;
    	console.log(this.user);
    });
  }
  

  updateBalance(id) {
  	this.userService.updateUser(id, this.user).subscribe(user=>{
  		//console.log(user);
  		this.router.navigate(["/user/" + id]);
  		this.updateBalanceInput = false;
  		this.flashMessagesService.show("更新成功！", {cssClass: 'alert-success', timeout: 3000});
  	});
  }

  deleteUser(id) {
  	if(confirm("确认要删除吗？")) {
      this.userService.deleteUser(id).subscribe(user=>{
     	this.flashMessagesService.show("删除成功！", {cssClass: 'alert-success', timeout: 3000});
     	this.router.navigate(["/"]);
      });
  	}

  }
}
