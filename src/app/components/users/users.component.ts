import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users:User [];
	totalOwn;

  constructor(public service: UserService) { }

  ngOnInit() {
  	this.service.getUsers().subscribe(users => {
  		this.users = users;
  		this.getTotalOwn();
  	});
  }

  getTotalOwn() {
  	let total = 0;
  	for(let i = 0; i < this.users.length; i++) {
  		total += this.users[i].balance;
  		console.log(this.users[i].balance);
  	}
  	this.totalOwn = total;
  }

}
