import { Component, OnInit } from '@angular/core';
import {TaskEditDialogComponent} from '../task-edit-dialog/task-edit-dialog.component';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-task-remove-dialog',
  templateUrl: './task-remove-dialog.component.html',
  styleUrls: ['./task-remove-dialog.component.css']
})
export class TaskRemoveDialogComponent implements OnInit {

  Loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<TaskEditDialogComponent>) {

  }//constructor

  ngOnInit() {

  }//ngOnInit

  RemoveClick(){

    this.Loading = true;

    setTimeout(function () {

      this.Loading = false;

      this.dialogRef.close(true);

    }.bind(this), 1200);

  }//RemoveClick

}
