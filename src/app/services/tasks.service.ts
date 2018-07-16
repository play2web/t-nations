import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Tasks } from './tasks';

@Injectable()
export class TasksProvider {

    private taskSubject = new BehaviorSubject<Array<Tasks>>([]);
    taskObeservable = this.taskSubject.asObservable();

    constructor(private http: HttpClient) {
        this.getAllTasks();
    }

        createNewTask(name: any): void {
            this.http.post(environment.apiUri + 'tasks', { name, finished: false },
            { responseType: 'text' }).subscribe( () => this.getAllTasks());
        }

         updateTask(id: number, name: string, finished: boolean): void {
            this.http.put(environment.apiUri + 'tasks/' + id, { name, finished },
            { responseType: 'text' }).subscribe( () => this.getAllTasks());
        }

        getAllTasks(): void {
            this.http.get(environment.apiUri + 'tasks')
            .map<any, Tasks[]>( data => data.map(Tasks.fromObject)).subscribe( x => this.taskSubject.next(x));
        }
}
