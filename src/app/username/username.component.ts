import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  userName = "";
  isUserNameEmpty = true;

  constructor() {}

  ngOnInit() {}

  checkUsername(event){
    if(this.userName.length == 0){
      this.isUserNameEmpty = true;
    }
    else{
      this.isUserNameEmpty = false;
    }
  }

  resetUsername(){
    this.userName = "";
    this.isUserNameEmpty = true;
  }
}
