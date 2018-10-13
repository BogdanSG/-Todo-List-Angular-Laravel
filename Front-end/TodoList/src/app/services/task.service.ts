import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TaskList : Task[] = [];

  private static API : string = 'http://localhost:3000/api';

  constructor(private http : HttpClient) {

    this.initTaskList()

  }//constructor

  private async initTaskList(url = `${TaskService.API}/get-tasks`){

    let result : any = await this.http.get(url).toPromise();

    if(result.data && Array.isArray(result.data)){

      result.data.forEach(task => {

        this.TaskList.push(new Task(task.id, task.text, new Date(task.created)));

      });

    }//result

  }//initTaskList

  getTaskList(){

    return this.TaskList;

  }//getTaskList

  async addTask(text : string, url = `${TaskService.API}/add-task`){

    let result : any = await this.http.post(url, {text: text}).toPromise();

    if(result.data){

      this.TaskList.push(new Task(result.data.id, result.data.text, new Date(result.data.created)));

    }//result

  }//addTask

  async removeTask(task : Task, url = `${TaskService.API}/delete-task`){

    let result : any = await this.http.post(url, {id: task.id}).toPromise();

    if(result.data === true){

      let index = this.TaskList.indexOf(task);
      this.TaskList.splice(index, 1);

    }//result

  }//removeTask

  async updateTask(task : Task, newText : string, url = `${TaskService.API}/update-task`){

    let result : any = await this.http.post(url, {id: task.id, text: newText}).toPromise();

    if(result.data === true){

      task.text = newText;

    }//result

  }//removeTask

}//TaskService
