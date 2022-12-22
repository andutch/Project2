import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';
import { TASKS } from '../models/example-tasks';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  constructor(public taskDataXfer: TaskDataXferService, private router: Router){

  };


  taskList = this.taskDataXfer.taskList;


  modifyTask(taskId: string): void {
    console.log("passed variable: " + taskId);
    this.taskDataXfer.searchId = taskId;
    this.taskDataXfer.search();
    this.router.navigateByUrl('/modify-tasks');
  }


  sortArr(){this.taskDataXfer.sortTasks()}


    populateExampleTasks():void {
    for (let task in TASKS)
      {
        // this.taskDataXfer.taskList.sort((a:any, b:any) => a.dueDate - b.dueDate).push(TASKS[task]);
        this.taskDataXfer.taskList.push(TASKS[task]);

      console.log(this.taskDataXfer.taskList)

      this.taskDataXfer.sortTasks();
        }}
       
  isPastDue(task:Task):boolean{
    let currentDate = new Date();
    
   if (Date.parse(task.dueDate) < currentDate.getDate()) {
    return true;
   }

  return false;
  }

}
