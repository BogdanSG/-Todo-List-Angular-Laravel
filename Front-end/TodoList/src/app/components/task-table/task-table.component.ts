import {Component, OnInit, Input, Output, ViewChild, AfterViewInit, EventEmitter} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';
import {MatDialog, MatPaginator, MatSidenav, MatSort, MatTableDataSource} from '@angular/material';
import {TaskEditDialogComponent} from '../task-edit-dialog/task-edit-dialog.component';
import {TaskRemoveDialogComponent} from '../task-remove-dialog/task-remove-dialog.component';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit, AfterViewInit {

  TaskList : Task[];
  dataSource;
  editID : number = -1;

  @Input()
  sidenav: MatSidenav;
  @ViewChild('paginatorSubs')
  paginatorSubs: MatPaginator;
  @ViewChild('sortSubs')
  sortSubs: MatSort;

  @Output()
  onRemoveTask = new EventEmitter<boolean>();

  columnsToDisplay : string[] = ['id', 'text', 'created','remove'];

  constructor(private TaskEditDialog : MatDialog, private TaskService : TaskService) {

    this.TaskList = this.TaskService.getTaskList();
    this.refreshTable();

  }//constructor

  showTaskEditDialog(task : Task){

    this.TaskEditDialog.open(TaskEditDialogComponent, {disableClose: true, data: task.text}).afterClosed().subscribe(async result => {

      if(result){

        await this.TaskService.updateTask(task, result);
        this.refreshTable();

      }//if

    });

  }//showTaskEditDialog

  showTaskRemoveDialog(task : Task){

    this.TaskEditDialog.open(TaskRemoveDialogComponent, {disableClose: true}).afterClosed().subscribe(async result => {

      if(result === true){

        await this.TaskService.removeTask(task);
        this.refreshTable();
        this.onRemoveTask.emit();

      }//if


    });

  }//showTaskEditDialog

  onMouseenter(task : Task){

    if(task){

      this.editID = task.id;

    }//if

  }//onMouseenter

  onMouseleave(){

    this.editID = -1;

  }//onMouseout

  ngOnInit() {

  }//ngOnInit

  ngAfterViewInit() {

    this.setDataSourceSettings();

  }//ngAfterViewInit

  setDataSourceSettings(){

    if(this.dataSource){

      this.dataSource.paginator = this.paginatorSubs;
      this.dataSource.sort = this.sortSubs;

    }//if

  }//setDataSourceSettings

  sidenavOpen(){

    if(this.sidenav){

      this.sidenav.open();

    }//if

  }//sidenavOpen

  refreshTable(){

    this.dataSource = new MatTableDataSource(this.TaskList);
    this.setDataSourceSettings();

  }//refreshTable

  EditTask(task : Task){

    if(task){

      this.showTaskEditDialog(task);

    }//if

  }//EditTask

  RemoveTask(task : Task){

    if(task){

      this.showTaskRemoveDialog(task);

    }//if

  }//RemoveTask

}//TaskTableComponent
