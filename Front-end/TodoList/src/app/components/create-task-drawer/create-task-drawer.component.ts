import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav, MatSnackBar} from '@angular/material';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-create-task-drawer',
  templateUrl: './create-task-drawer.component.html',
  styleUrls: ['./create-task-drawer.component.css']
})
export class CreateTaskDrawerComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  Text: string = '';

  TaskList : Task[];

  @Output() onAddTask = new EventEmitter<boolean>();

  constructor(private TaskService : TaskService, public snackBar: MatSnackBar) {

    this.TaskList = this.TaskService.getTaskList();

  }//constructor

  ngOnInit() {

  }//ngOnInit

  sidenavClose(){

    if(this.sidenav){

      this.sidenav.close();

    }//if

  }//sidenavOpen

  addTask(){

    if(this.Text && this.Text.indexOf('!') === -1){

      this.TaskService.addTask(new Task(777, this.Text, new Date()));
      this.Text = '';
      this.sidenavClose();
      this.onAddTask.emit();

    }//if
    else {

      this.snackBar.open('Incorrect Text', null, {
        duration: 3000,
      });

    }//else

  }//addTask

}//CreateTaskDrawerComponent
