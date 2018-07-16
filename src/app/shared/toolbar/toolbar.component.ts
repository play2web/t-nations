import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../services/tasks';
import { TasksProvider } from '../../services/tasks.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  tasks: Array<Tasks>;
  finished: number;
  unfinished: number;

  constructor(private tasksProvider: TasksProvider) { }

  ngOnInit() {
    this.tasksProvider.taskObeservable.subscribe( x => { this.tasks = x;
      this.unfinished = x.filter( el => el.finished === false).length;
      this.finished = x.filter( el => el.finished === true).length;
    });
  }
}
