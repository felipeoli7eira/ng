import { Component, Input } from '@angular/core';
import TaskComponent from './task/task.component';
import { Task } from './task/task.model';
import { DUMMY_USER } from '../user/user.model';
import NewTaskFormDialogComponent from './new-task-form-dialog/new-task-form-dialog.component';
import { type FormFields } from './new-task-form-dialog/form.model';
import TasksService from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskFormDialogComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export default class TasksComponent
{
  @Input({ required: true }) user?: DUMMY_USER

  constructor(private tasksService: TasksService)
  {
  }

  public isNewTaskFormDialogOpen: boolean = false

  get getTasks(): Task[]
  {
    return this.tasksService.getTasks
  }

  get getSelectedUserTasks(): Task[]
  {
    if (this.user) {
      return this.tasksService.getSelectedUserTasks(this.user.id)
    }

    return []
  }

  taskCompleted(id: string): void
  {
    this.tasksService.taskCompleted(id)
  }

  openNewTaskFormDialog(): void
  {
    this.changeNewTaskFormDialogVisibilityStateTo(true)
  }

  closeNewTaskFormDialog(): void
  {
    this.changeNewTaskFormDialogVisibilityStateTo(false)
  }

  changeNewTaskFormDialogVisibilityStateTo(state: boolean): void
  {
    this.isNewTaskFormDialogOpen = state
  }

  addTask(formFields: FormFields): void
  {
    this.tasksService.addTask({
      title: formFields.title,
      summary: formFields.summary,
      dueDate: formFields.dueDate
    }, this.user!.id)


    this.closeNewTaskFormDialog()
  }
}
