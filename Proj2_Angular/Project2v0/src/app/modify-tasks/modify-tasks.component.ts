import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';

@Component({
  selector: 'app-modify-tasks',
  templateUrl: './modify-tasks.component.html',
  styleUrls: ['./modify-tasks.component.css']
})
export class ModifyTasksComponent {

  constructor(private router: Router, public taskDataXfer: TaskDataXferService){}

  currentDate = new Date();
  timestamp = "Last Sync: " + (this.currentDate.getMonth()+1) + "/"
  + this.currentDate.getDate() + "/" 
  + this.currentDate.getFullYear() + " @ "  
  + this.currentDate.getHours() + ":"  
  + this.currentDate.getMinutes();

  newTask: Task = new Task ('', '', 0, this.timestamp);//mod
  

  modifyTask():void {
    this.taskDataXfer.taskList.push(this.newTask);
    console.log(this.taskDataXfer.taskList)
  }

  returnToTaskView(): void {
    this.router.navigateByUrl('/task-view');
  }
}
