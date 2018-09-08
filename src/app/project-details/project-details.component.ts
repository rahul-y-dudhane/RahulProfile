import { Component} from '@angular/core';
import {Router , ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent  {

  projects = [
    {id : 1 , title : "Mobile Shoppe Mangament" , desc : "<p>Desktop Application Using <strong>Java</strong></p>"},
    {id : 2 , title : "i-Student" , desc : "<p>Daily used application for students designed using <strong>Android</strong></p>"},
    {id : 3 , title : "PreSchool" , desc : "<p>Web application for preschool using <strong>MEAN Stack</strong></p>"},
    {id : 4 , title : "BookCart" , desc : "<p>Book store online ! for purchasing books from home designed using <strong>JSP and Hibernate</strong></p>"},
    {id : 5 , title : "GoldenDropRealty" , desc : "<p>Real estate application Using <strong>C# .NET</strong></p>"},

  ];
  selectedProject  : number;

  constructor(private router : Router , private route : ActivatedRoute) {
    route.params.subscribe((params : Params) => {
        this.selectedProject = Number(params["id"]);
    });
   }

   onPrevClick(id : number){
     if(id > 1){
      
       this.router.navigate(["/project-details" , id-1]);
     }else{

     }
   }

   onNextClick(id : number){
     if(id < 5){

       this.router.navigate(["/project-details" , id+1]);
      }

   }

  

}
