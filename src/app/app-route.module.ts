import {RouterModule} from "@angular/router";

import {EventBindingComponent} from './event-binding-component/event-binding.component';
import {TechStackComponent} from './tech-stack-component/tech-stack.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { NgModule } from "@angular/core";


var route = [
    {path : 'event-binding-component' , component : EventBindingComponent},
    {path : 'tech-stack-component' , component : TechStackComponent},
    {path : 'projects-list' , component : ProjectsComponent},
    {path : 'project-details/:id' , component : ProjectDetailsComponent},
    
    {path : 'tech-stack-component' , component : TechStackComponent},
    
    {path : '' , redirectTo : "/event-binding-component" , pathMatch : 'full' },
    {path : '**' , component : PageNotFoundComponent }
    
  ];

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports : [RouterModule],

})
export class AppRouteModule{

}
export const appComponents = [
    ProjectsComponent,
    ProjectDetailsComponent,
    EventBindingComponent , 
    TechStackComponent , 
    PageNotFoundComponent];