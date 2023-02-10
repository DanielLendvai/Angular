import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Array<Task> = [
    {
      title: "Go home",
      is_canceled: false
    },
    {
      title:"Take a nap",
      is_canceled: false
    },
    {
      title: "Buy groceries",
      is_canceled: false
    }
  ];

  clearToDo(){
    this.tasks.splice(0);
 }
 addTask(value: string){
  this.tasks.push({
    title: value,
    is_canceled: false
  });
}
deleteTask(idx: number){
  let do_delete = confirm("Are you sure to delete the task?");
  if (do_delete){
    this.tasks.splice(idx, 1);
  }
}
}

