import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TasksProvider } from './services/tasks.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksAddNewComponent, TasksAddNewDialogComponent } from './tasks-add-new/tasks-add-new.component';

import { SharedModule } from './shared/shared.module';
import { TasksListModule } from './tasks-list/tasks-list.module';
import { TasksAddNewModule } from './tasks-add-new/tasks-add-new.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TasksListComponent,
    TasksAddNewComponent,
    TasksAddNewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TasksListModule,
    TasksAddNewModule,
    HttpClientModule
  ],
  entryComponents: [TasksAddNewDialogComponent],
  providers: [TasksProvider],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    BrowserAnimationsModule
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
