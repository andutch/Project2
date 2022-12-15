import { Injectable } from '@angular/core';

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

  search(): void {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].taskId === this.searchId) {
      this.taskToBeEdited = this.taskList[i];
      }
    }
  }
}
