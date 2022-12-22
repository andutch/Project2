import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { TaskDataXferService } from '../services/task-data-xfer.service';

@Component({
  selector: 'app-modify-tasks',
  templateUrl: './modify-tasks.component.html',
  styleUrls: ['./modify-tasks.component.css']
})
export class ModifyTasksComponent{

  constructor(private router: Router, public taskDataXfer: TaskDataXferService){
    this.modifiedTask = Object.assign({},this.taskDataXfer.taskToBeEdited)
  }


  currentDate = new Date();
  timestamp = "Last Sync: " + (this.currentDate.getMonth()+1) + "/"
  + this.currentDate.getDate() + "/" 
  + this.currentDate.getFullYear() + " @ "  
  + this.currentDate.getHours() + ":"  
  + this.currentDate.getMinutes();


  modifiedTask: Task = new Task ('', '', '', 0, this.timestamp);
  


  modifyTask():void {
    this.taskDataXfer.modifyTask(this.modifiedTask);

  }

  returnToTaskView(): void {

    if (this.isCompleted())
    {
      console.log('on completed')
      this.router.navigateByUrl('/completed-tasks');}

    else this.router.navigateByUrl('/task-view');
  }

  moveToCompleted(){

  this.taskDataXfer.moveToCompleted(this.modifiedTask.taskId);
  this.router.navigateByUrl('/completed-tasks');

  }

isCompleted():boolean{
  return this.taskDataXfer.isCompleted(this.modifiedTask.taskId);
}

isOnList():boolean{
  return this.taskDataXfer.isOnList(this.modifiedTask.taskId);
}

unComplete(){
  this.taskDataXfer.unComplete(this.modifiedTask.taskId);
  this.router.navigateByUrl('/task-view');
}

deleteTask(){
  this.taskDataXfer.deleteFromTasks(this.modifiedTask.taskId);
  this.router.navigateByUrl('/task-view');
}

deleteCompletedTask(){
  this.taskDataXfer.deleteFromComplete(this.modifiedTask.taskId);
  this.router.navigateByUrl('/completed-tasks');
}

}
