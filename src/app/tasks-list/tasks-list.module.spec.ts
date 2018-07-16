import { TasksListModule } from './tasks-list.module';

describe('TasksListModule', () => {
  let tasksListModule: TasksListModule;

  beforeEach(() => {
    tasksListModule = new TasksListModule();
  });

  it('should create an instance', () => {
    expect(tasksListModule).toBeTruthy();
  });
});
