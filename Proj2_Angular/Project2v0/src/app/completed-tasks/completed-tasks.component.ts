import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';
import { COMPLETEDTASKS } from '../models/example-tasks';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent {
  constructor(public taskDataXfer: TaskDataXferService, private router: Router){

 
  };

  taskList = this.taskDataXfer.completedTaskList;


  modifyTask(taskId: string): void {
    console.log("passed variable: " + taskId);
    this.taskDataXfer.searchId = taskId;
    this.taskDataXfer.search();
    this.router.navigateByUrl('/modify-tasks');
  }


  sortArr(){this.taskDataXfer.sortTasks()}

/////////////////
    populateExampleTasks():void {
    for (let task in COMPLETEDTASKS)
      {
        // this.taskDataXfer.taskList.sort((a:any, b:any) => a.dueDate - b.dueDate).push(TASKS[task]);
        this.taskDataXfer.completedTaskList.push(COMPLETEDTASKS[task]);

      console.log(this.taskDataXfer.taskList)

      this.taskDataXfer.sortTasks();
        }}
       
}
