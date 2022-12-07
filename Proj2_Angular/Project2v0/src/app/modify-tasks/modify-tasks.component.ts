import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-modify-tasks',
  templateUrl: './modify-tasks.component.html',
  styleUrls: ['./modify-tasks.component.css']
})
export class ModifyTasksComponent {

  taskName: string='';

  taskList: any=[
  {
    taskName:"blah"
  },
  {
    taskName:"another blah"
  }
];

  addTaskUsingModel(): void{
    let newTask: Task = new Task(this.taskName)

    this.taskList.push(newTask);
  }

}
