import {Component} from "@angular/core";

@Component({
    selector : "my-event-binding",
    templateUrl : "./event-binding.component.html",
    styleUrls : ['./event-binding.component.css']
})
export class EventBindingComponent{

    name = "Name :- Rahul Yuvaraj Dudhane";
     emailId = "Email :-rahul.y.dudhane@gmail.com";
     imageUrl = "<img src='/assets/myProfile.jpg' class='img-circle' width='240' height='240' />"
      
    flag = true;
    buttonText = "Hide profile";
    visitorName = "";
    
    
    display():void{
        if(this.flag === false){
            this.buttonText = "Hide Profile"
            this.flag = true;
            this.name = "Name :- Rahul Yuvaraj Dudhane";
            this.emailId = "Email :-rahul.y.dudhane@gmail.com";
            this.imageUrl = "<img src='/assets/myProfile.jpg' class='img-circle' width='240' height='240' />"
        }else{
            this.hide();
        }
      
    }
    hide():void{
        this.flag = false;
        this.buttonText = "See Profile";
            this.name = null;
            this.emailId = null;
            this.imageUrl = null;

    }
   

}