import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRemoveDialogComponent } from './task-remove-dialog.component';

describe('TaskRemoveDialogComponent', () => {
  let component: TaskRemoveDialogComponent;
  let fixture: ComponentFixture<TaskRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
