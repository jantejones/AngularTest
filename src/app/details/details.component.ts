import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isDisplay = false;
  items: string[] = [];
  count = 1;
  constructor() { }

  ngOnInit() {
  }

  displayDetails(){
    this.isDisplay = true;
    this.items.push("Clicked " + this.count++ + " times");
  }

  getColor(){
    if(this.count > 5){
      return "blue";
    }
    else{
      return "black";
    }
  }

}