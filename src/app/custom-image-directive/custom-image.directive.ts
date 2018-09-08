import {Directive , ElementRef, HostListener, Renderer} from "@angular/core";

@Directive ({
    selector : "[mycustomdir]"
})
export class CustomImageDirective{
    constructor(private e1 : ElementRef){

    }

    changeStyle(myColor : string){
       this.e1.nativeElement.style.background = myColor;
    }

    @HostListener("mouseenter")
        onmouseenter(){
            this.changeStyle("cyan");
        }


    @HostListener("mouseleave")
    onmouseleave(){

        this.changeStyle(null);
    }
}