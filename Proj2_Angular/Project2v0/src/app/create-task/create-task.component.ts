import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(private router: Router, private taskDataXfer: TaskDataXferService){}

  @Output() newTaskEvent = new EventEmitter<any>();

  newTask: Task = new Task ('', '', 0);

  

  createNewTask():void {
    this.taskDataXfer.taskList.push(this.newTask);
    console.log(this.taskDataXfer.taskList)
  }

  returnToTaskView(): void {
    this.router.navigateByUrl('/task-view');
  }

}
