import {Component} from "@angular/core";

@Component({
    selector :'my-tech-stack',
    templateUrl : './tech-stack.component.html',
    styleUrls : ['./tech-stack.component.css']
})
export class TechStackComponent{
    technologies = [{subject :"Angular" , desc:"Demo Angular"} ,
        {subject: "NodeJS", desc:"Demo Node" },
        {subject:"ExpressJS" , desc :"Demo Express"},
        {subject : "MongoDB" ,desc : "Demo MongoDB"},
        {subject : "Java" , desc : "Demo Java"},
        {subject : "SpringBoot" , desc : "Demo Spring Boot"},
        {subject : "HTML5" , desc : "Demo HTML"},
        {subject : "Android" , desc : "Demo Android"},
        {subject : "UnixOperatingSystem" , desc : "Demo UnixOperatingSystem"},
        {subject : "Win32SDK" , desc : "Demo Win32SDK"},
        {subject : "MySQL" , desc : "Demo MySQL"},
        {subject : "C" , desc : "Demo C"},
        {subject : "Cpp" , desc : "Demo Cpp"}

   
    ];
        
    //     "ExpressJS" , "MongoDB" , "Java" ,
    // "SpringBoot" , "HTML5" , "CSS3" , "Android" , "UnixOperatingSystem" , "Win32SDK","MySQL","C","Cpp"];
         
    getUrl(url : String) : any{
            return '#'+url;
    }
        
 }