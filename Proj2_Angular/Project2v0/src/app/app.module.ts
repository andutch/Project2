import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import forms module
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { ModifyTasksComponent } from './modify-tasks/modify-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskViewComponent,
    ModifyTasksComponent,
    CompletedTasksComponent,
    CalendarComponent
  ],

   ///add forms module here 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
