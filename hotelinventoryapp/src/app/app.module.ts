import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  //decorator - tells the compiler what modules are used.
  declarations: [
    //directives and pipes needs to be registered here.
    AppComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  //default root component
})
export class AppModule { }
//default root module 
