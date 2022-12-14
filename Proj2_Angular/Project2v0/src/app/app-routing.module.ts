import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

import { ModifyTasksComponent } from './modify-tasks/modify-tasks.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

  {
    path: '',
    component:TaskViewComponent //default page load router(empty string path)
  },
  {
    path: 'task-view',
    component:TaskViewComponent
  },
  {
    path: 'calendar',
    component:CalendarComponent 
  },
  {
    path: 'modify-tasks',
    component:ModifyTasksComponent 
  },
  {
    path: 'completed-tasks',
    component:CompletedTasksComponent 
  },
  {
    path: 'about-us',
    component:AboutUsComponent 
  },
  {
    path: 'create-task',
    component: CreateTaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
