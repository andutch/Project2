import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  constructor(public taskDataXfer: TaskDataXferService, private router: Router){};

  taskList = this.taskDataXfer.taskList;


  modifyTask(taskId: string): void {
    console.log("passed variable: " + taskId);
    this.taskDataXfer.searchId = taskId;
    this.taskDataXfer.search();
    this.router.navigateByUrl('/modify-tasks');
  }

}
