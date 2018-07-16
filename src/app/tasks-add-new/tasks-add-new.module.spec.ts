import { TasksAddNewModule } from './tasks-add-new.module';

describe('TasksAddNewModule', () => {
  let tasksAddNewModule: TasksAddNewModule;

  beforeEach(() => {
    tasksAddNewModule = new TasksAddNewModule();
  });

  it('should create an instance', () => {
    expect(tasksAddNewModule).toBeTruthy();
  });
});
