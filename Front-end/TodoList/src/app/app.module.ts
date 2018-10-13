import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatListModule,
  MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material';

//My Components
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { TaskListEmptyDialogComponent } from './components/task-list-empty-dialog/task-list-empty-dialog.component';
import { CreateTaskDrawerComponent } from './components/create-task-drawer/create-task-drawer.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskEditDialogComponent } from './components/task-edit-dialog/task-edit-dialog.component';
import { TaskRemoveDialogComponent } from './components/task-remove-dialog/task-remove-dialog.component';

import { TaskService } from './services/task.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TaskListEmptyDialogComponent,
    CreateTaskDrawerComponent,
    TaskTableComponent,
    TaskEditDialogComponent,
    TaskRemoveDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatToolbarModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  entryComponents: [
    TaskListEmptyDialogComponent,
    TaskEditDialogComponent,
    TaskRemoveDialogComponent
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
