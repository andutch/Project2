import { Injectable } from '@angular/core';

import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskDataXferService {

  constructor() { }

  public taskData: any;

  taskList: any = [];

  completedTaskList: any = [];

  searchId: string = '';

  taskToBeEdited: any;

  taskToBeEditedIndex: any;


  search(): void {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].taskId === this.searchId) {
      this.taskToBeEdited = this.taskList[i];

      this.taskToBeEditedIndex = i;
      }
    }
  }

  modifyTask(modifiedTask: Task) {
    console.log("inside the service (tasktobeedited): ");
    console.log(this.taskToBeEdited);
    console.log("inside the service (modifiedTask): ");
    console.log(modifiedTask);
    if (modifiedTask.title != '' &&  modifiedTask.title !== this.taskToBeEdited.title)
      this.taskToBeEdited.title = modifiedTask.title;
    if (modifiedTask.content != '' && modifiedTask.content !== this.taskToBeEdited.content)
      this.taskToBeEdited.content = modifiedTask.content;
    this.taskToBeEdited.priority = modifiedTask.priority;
    this.taskToBeEdited.timestamp = modifiedTask.timestamp;
    console.log("inside the service afer if statements(tasktobeedited): ");
    console.log(this.taskToBeEdited)
    console.log(this.taskList);
    // this.taskList.splice(this.taskToBeEditedIndex, 1);
    // this.taskList.push(this.taskToBeEdited);    
    // console.log();
    // console.log(this.taskList);
  }

}
