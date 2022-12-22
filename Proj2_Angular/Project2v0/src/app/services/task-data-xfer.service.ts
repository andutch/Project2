import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskDataXferService {

  constructor() {}

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

  searchCompleted(): void {
    for (let i = 0; i < this.completedTaskList.length; i++) {
      if (this.completedTaskList[i].taskId === this.searchId) {
      this.taskToBeEdited = this.completedTaskList[i];

      this.taskToBeEditedIndex = i;
      }
    }
  }

  modifyTask(modifiedTask: Task) {
    if (modifiedTask.title != '' &&  modifiedTask.title !== this.taskToBeEdited.title)
      this.taskToBeEdited.title = modifiedTask.title;
    if (modifiedTask.content != '' && modifiedTask.content !== this.taskToBeEdited.content)
      this.taskToBeEdited.content = modifiedTask.content;
    this.taskToBeEdited.priority = modifiedTask.priority;
    this.taskToBeEdited.timestamp = modifiedTask.timestamp; 
  }

  // funct():Date{return (new Date(this.taskList.))}


sortTasks(){

  this.taskList.sort((a:any, b:any) => a.priority - b.priority);
  this.taskList.sort((a:any, b:any) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
  this.completedTaskList.sort((a:any, b:any) => a.priority - b.priority);
  this.completedTaskList.sort((a:any, b:any) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
 
}


moveToCompleted(id:string){
  for(let task in this.taskList){
    if(id===this.taskList[task].taskId) {
      this.completedTaskList.push(this.taskList[task]);
      this.taskList.splice(task,1);}
  }

  this.sortTasks();
}


unComplete(id:string){
  for(let task in this.completedTaskList){
    if(id===this.completedTaskList[task].taskId){
      this.taskList.push(this.completedTaskList[task]);
      this.completedTaskList.splice(task,1);}
  }

  this.sortTasks();
}


isCompleted(id:string):boolean{
  for(let task in this.completedTaskList){
    if(id===this.completedTaskList[task].taskId){
      return true;
    }
  } 
  
  return false;
}

isOnList(id:string):boolean{
  for(let task in this.taskList){
    if(id===this.taskList[task].taskId){
      return true;
    }
  }
   return false;
}

deleteFromComplete(id:string){
  for(let task in this.completedTaskList){
    if(id===this.completedTaskList[task].taskId){
        this.completedTaskList.splice(task,1);}
  }

  this.sortTasks();
}


deleteFromTasks(id:string){
  for(let task in this.taskList){
    if(id===this.taskList[task].taskId){
        this.taskList.splice(task,1);}
  }

  this.sortTasks();
}

}
