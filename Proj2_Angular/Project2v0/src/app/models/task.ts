//create an model for an object as a ng g class name

export class Task {

        title: string;
        content: string; // description of the task
        priority: number; // 0-2, 0 being the highest

        constructor(title:string, content: string, priority: number){
            this.title = title;
            this.content = content;
            this.priority = priority;
        }

}
