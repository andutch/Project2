//create an model for an object as a ng g class name

export class Task {

        title: string;
        dueDate: string;
        content: string; // description of the task

        priority: number; // 0-2, 0 being the highest
        timestamp: any;
        

        currentDate = new Date();
        taskId = (this.currentDate.getMonth()+1)
        + this.currentDate.getDate() + ":" 
        + this.currentDate.getFullYear() + ":"  
        + this.currentDate.getHours() + ":"  
        + this.currentDate.getMinutes() + ":"
        + this.currentDate.getSeconds();

        constructor(title:string, dueDate:string, content: string, priority: number, timestamp: any) {
            this.title = title;
            this.dueDate=dueDate;
            this.content = content;
            this.priority = priority;
            this.timestamp = timestamp;
            this.taskId;
        }
        

      

}



