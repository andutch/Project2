
import { Component, EventEmitter, Output } from '@angular/core';

import { Task } from '../models/task';
import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';


import { TASKS } from '../models/example-tasks';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})




export class CreateTaskComponent {


  constructor(private router: Router, private taskDataXfer: TaskDataXferService){}

  

  currentDate = new Date();
  timestamp = "Last Sync: " + (this.currentDate.getMonth()+1) + "/"
  + this.currentDate.getDate() + "/" 
  + this.currentDate.getFullYear() + " @ "  
  + this.currentDate.getHours() + ":"  
  + this.currentDate.getMinutes();


  newTask: Task = new Task ('', '', '', 0, this.timestamp);


  

  createNewTask():void {
    this.taskDataXfer.taskList.push(this.newTask);
    this.taskDataXfer.sortTasks();
  }

  populateExampleTasks():void {
    for (let task in TASKS) {
      this.taskDataXfer.taskList.push(TASKS[task]);
    }
    
    this.taskDataXfer.sortTasks();
  }




  returnToTaskView(): void {
    this.router.navigateByUrl('/task-view');
  }

}



