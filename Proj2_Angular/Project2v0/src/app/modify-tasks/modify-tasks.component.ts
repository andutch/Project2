import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-modify-tasks',
  templateUrl: './modify-tasks.component.html',
  styleUrls: ['./modify-tasks.component.css']
})
export class ModifyTasksComponent {

  title: string='';
  content: string = '';
  priority: number = 0; 
  dateCreated: string = '';

  taskList: any=[
  {
    taskName:"blah"
  },
  {
    taskName:"another blah"
  }
];

  addTaskUsingModel(): void{
    let newTask: Task = new Task(this.title, this.content, this.priority, this.dateCreated )

    this.taskList.push(newTask);
  }

}
