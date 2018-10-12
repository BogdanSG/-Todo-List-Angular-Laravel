import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TaskList : Task[] = [
    new Task(1, 'Test', new Date()),
    new Task(2, 'Test', new Date()),
    new Task(3, 'Test', new Date()),
    new Task(4, 'Test', new Date()),
    new Task(5, 'Test', new Date()),
    new Task(6, 'Test', new Date()),
    new Task(7, 'Test', new Date()),
    new Task(8, 'Test', new Date()),
  ];

  constructor() {

  }//constructor

  getTaskList(){

    return this.TaskList;

  }//getTaskList

  addTask(task : Task){

    this.TaskList.push(task);

  }//addTask

  removeTask(task : Task){

    let index = this.TaskList.indexOf(task);
    this.TaskList.splice(index, 1);

  }//RemoveTaskByID

}//TaskService
