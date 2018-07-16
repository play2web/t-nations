import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddNewComponent } from './tasks-add-new.component';

describe('TasksAddNewComponent', () => {
  let component: TasksAddNewComponent;
  let fixture: ComponentFixture<TasksAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
