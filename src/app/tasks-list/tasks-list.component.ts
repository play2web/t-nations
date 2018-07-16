import {Component, OnInit} from '@angular/core';

import { Tasks } from '../services/tasks';
import { TasksProvider } from '../services/tasks.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit {
  tasks: Array<Tasks>;
  displayedColumns: string[] = ['id', 'name', 'finished'];

  constructor(private tasksProvider: TasksProvider) { }

  ngOnInit() {
    this.tasksProvider.taskObeservable.subscribe(x => this.tasks = x);
  }

  public updateCheckboxValue(id: number, name: string, event: any) {
    this.tasksProvider.updateTask(id, name, event.checked);
  }
}
