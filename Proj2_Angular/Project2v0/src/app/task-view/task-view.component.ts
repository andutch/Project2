import { Component } from '@angular/core';
import { TaskDataXferService } from '../services/task-data-xfer.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  constructor(public taskDataXfer: TaskDataXferService){};

  taskList = this.taskDataXfer.taskList;

}
