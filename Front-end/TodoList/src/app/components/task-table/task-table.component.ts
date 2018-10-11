import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';
import {MatSidenav, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  TaskList : Task[];
  dataSource;

  @Input()
  sidenav: MatSidenav;

  columnsToDisplay : string[] = ['id', 'text', 'created'];

  constructor(private TaskService : TaskService) {

    this.TaskList = this.TaskService.getTaskList();
    this.refreshTable();

  }//constructor

  ngOnInit() {

  }//ngOnInit

  sidenavOpen(){

    if(this.sidenav){

      this.sidenav.open();

    }//if

  }//sidenavOpen

  refreshTable(){

    this.dataSource = new MatTableDataSource(this.TaskList);

  }//refreshTable

}//TaskTableComponent
