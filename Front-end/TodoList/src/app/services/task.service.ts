import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TaskList : Task[] = [
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
    new Task(1, 'Test', new Date()),
  ];

  constructor() {

  }//constructor

  getTaskList(){

    return this.TaskList;

  }//getTaskList

}//TaskService
