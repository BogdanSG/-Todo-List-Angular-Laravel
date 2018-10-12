import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent implements OnInit {

  Loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {

  }//constructor

  ngOnInit() {

  }//ngOnInit

  EditClick(){

    this.Loading = true;

    setTimeout(function () {

      this.Loading = false;

      this.dialogRef.close(this.data);

    }.bind(this), 1200);

  }//EditClick

}//TaskEditDialogComponent
