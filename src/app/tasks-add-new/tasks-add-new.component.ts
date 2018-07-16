import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import 'rxjs/add/observable/timer';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TasksProvider } from '../services/tasks.service';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Tasks } from '../services/tasks';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-tasks-add-new-dialog-component',
  templateUrl: 'tasks-add-new-dialog.html'
})

export class TasksAddNewDialogComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private tasksProvider: TasksProvider,
    public dialogRef: MatDialogRef<TasksAddNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    tasks: Array<Tasks>;
    public createNewTaskForm: FormGroup;
    alreadyExist: boolean;

    ngOnInit() {
      this.createNewTaskForm = this._fb.group({
        TaskName: ['', Validators.compose([
          Validators.required
        ])]
      });
    }

    public onSubmitcreateNewTaskForm({ value, valid }: { value: any, valid: boolean }) {
      this.tasksProvider.taskObeservable.subscribe( x => this.tasks = x);
        const foundTask = this.tasks.find(task => task.name === this.createNewTaskForm.get('TaskName').value);
        if (foundTask) {
          this.alreadyExist = true;
        } else {
          this.tasksProvider.createNewTask(this.createNewTaskForm.get('TaskName').value);
          this.dialogRef.close();
        }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-tasks-add-new',
  templateUrl: './tasks-add-new.component.html',
  styleUrls: ['./tasks-add-new.component.scss']
})

export class TasksAddNewComponent implements OnInit {
  name: string;
  private subscription: Subscription;
  timer = Observable.timer(20000, 20000);

  ngOnInit() {}
  constructor(public dialog: MatDialog, private tasksProvider: TasksProvider) {
    this.subscription = this.timer.subscribe( ticks => {
    this.tasksProvider.createNewTask(this.makeTaskRandomName());
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TasksAddNewDialogComponent, {
      width: '250px',
      data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result => {
    }
  );
}

  makeTaskRandomName() {
    // var text = "";
    // var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // for (var i = 0; i < 5; i++)
    // text += possible.charAt(Math.floor(Math.random() * possible.length));
    return 'Task ' + new Date();
  }
}
