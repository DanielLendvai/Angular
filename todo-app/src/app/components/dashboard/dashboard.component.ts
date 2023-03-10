import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
interface Task {
  title: string;
  is_canceled: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tasks: Array<Task> = [
    {
      title: 'Go home',
      is_canceled: false,
    },
    {
      title: 'Take a nap',
      is_canceled: false,
    },
    {
      title: 'Buy groceries',
      is_canceled: false,
    },
  ];

  clearToDo() {
    let do_delete = confirm('Are you sure to delete all tasks?');
    if (do_delete) {
      this.tasks.splice(0);
    }
  }

  addTask(input: { value: string; }) {
    let value = input.value;
    input.value = '';
    this.tasks.push({
      title: value,
      is_canceled: false,
    });
  }

  cancelTask(idx: number) {
    if (this.tasks[idx].is_canceled) {
      this.tasks[idx].is_canceled = false;
    } else {
      this.tasks[idx].is_canceled = true;
    }
  }

  deleteTask(idx: number) {
    let do_delete = confirm('Are you sure to delete the task?');
    if (do_delete) {
      this.tasks.splice(idx, 1);
    }
  }

  editTask(idx: number) {
    let title = this.tasks[idx].title;
    let result = prompt('Edit Task Title', title);
    if (result !== null && result !== '') {
      this.tasks[idx].title = result;
    }
  }
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
