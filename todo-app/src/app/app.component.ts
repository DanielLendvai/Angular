import { Component, TemplateRef, Input, ElementRef, ViewChild } from '@angular/core';

interface Task{
 title: string,
 is_canceled: boolean
}

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {

 
}