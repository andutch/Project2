import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskDataXferService {

  constructor() { }

  public taskData: any;

  taskList: any = [];

  completedTaskList: any = [];

  ngOnChange(){
    
  }
}
