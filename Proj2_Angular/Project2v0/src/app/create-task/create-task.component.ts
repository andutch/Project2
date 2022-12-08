import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(private router: Router){}

  @Output() newTaskEvent = new EventEmitter<any>();

  newTask: Task = new Task ('', '', 0);

  

  createNewTask():void {
    this.newTaskEvent.emit(this.newTask);

    console.log(this.newTask);
  }

  returnToTaskView(): void {
    this.router.navigateByUrl('/task-view');
  }

}
