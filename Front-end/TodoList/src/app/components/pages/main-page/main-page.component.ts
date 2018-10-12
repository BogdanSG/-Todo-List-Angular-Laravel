import {Component, OnInit, ViewChild} from '@angular/core';
import { Task } from '../../../models/task';
import {MatDialog} from '@angular/material';
import {TaskListEmptyDialogComponent} from '../../task-list-empty-dialog/task-list-empty-dialog.component';
import {MatSidenav} from '@angular/material/sidenav';
import {TaskService} from '../../../services/task.service';
import {TaskTableComponent} from '../../task-table/task-table.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  @ViewChild('taskTable')
  taskTable: TaskTableComponent;

  TaskList : Task[];

  Loading: boolean = true;

  constructor(private TaskListEmptyDialog : MatDialog, private TaskService : TaskService) {

    this.TaskList = this.TaskService.getTaskList();

  }//constructor

  showTaskListEmptyDialog(){

    //Angular ExpressionChangedAfterItHasBeenCheckedError Bug
    setTimeout(() => {

      if(this.TaskList && this.TaskList.length === 0){

        this.TaskListEmptyDialog.open(TaskListEmptyDialogComponent, {disableClose: true}).afterClosed().subscribe(result => {

          if(result === true){

            this.sidenav.open()

          }//if
          else {

            location.reload();

          }//else

        });

      }//if

    });

  }//showTaskListEmptyDialog

  ngOnInit() {

    setTimeout(function () {

      this.Loading = false;
      this.showTaskListEmptyDialog();

    }.bind(this), 1200);

  }//ngOnInit

  onAddTask(){

    if(this.taskTable){

      this.taskTable.refreshTable();

    }//if

  }//onAddTask

  onRemoveTask(){

    this.showTaskListEmptyDialog();

  }//onRemoveTask

}//MainPageComponent
