import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRouteModule} from './app-route.module';
 
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import {MenuComponent} from './menu-component/menu.component';
import {CustomImageDirective} from './custom-image-directive/custom-image.directive';
import { FooterComponent } from './footer/footer.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';

import {appComponents} from './app-route.module';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    MenuComponent,
    CustomImageDirective,
    FooterComponent,
    MycarouselComponent,
    appComponents,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
