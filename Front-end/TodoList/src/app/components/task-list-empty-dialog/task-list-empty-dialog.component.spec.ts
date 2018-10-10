import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListEmptyDialogComponent } from './task-list-empty-dialog.component';

describe('TaskListEmptyDialogComponent', () => {
  let component: TaskListEmptyDialogComponent;
  let fixture: ComponentFixture<TaskListEmptyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListEmptyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListEmptyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
