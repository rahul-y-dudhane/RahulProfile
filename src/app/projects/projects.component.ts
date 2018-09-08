import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {id : 1 , title : "Mobile Shoppe Mangament" , desc : "<p>Desktop Application Using <strong>Java</strong></p>"},
    {id : 2 , title : "i-Student" , desc : "<p>Daily used application for students designed using <strong>Android</strong></p>"},
    {id : 3 , title : "PreSchool" , desc : "<p>Web application for preschool using <strong>MEAN Stack</strong></p>"},
    {id : 4 , title : "BookCart" , desc : "<p>Book store online ! for purchasing books from home designed using <strong>JSP and Hibernate</strong></p>"},
    {id : 5 , title : "GoldenDropRealty" , desc : "<p>Real estate application Using <strong>C# .NET</strong></p>"},

  ];

  constructor(private router : Router) { }

  onProjectClick(id : number){
    this.router.navigate(["/project-details" , id]);
  }

}
