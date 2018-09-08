import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent {

  name = "Rahul Yuvaraj Dudhane";
  emailId = "rahul.y.dudhane@gmail.com";
  imageUrl = "/assets/IMG-20151021-WA0006.jpg"
  myButton = "<span>  My Button</span>";

  changeColor():void{

  }

}
