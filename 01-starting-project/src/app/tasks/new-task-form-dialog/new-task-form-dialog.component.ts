import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type FormFields } from './form.model';
import TasksService from '../tasks.service';

@Component({
  selector: 'app-new-task-form-dialog',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task-form-dialog.component.html',
  styleUrl: './new-task-form-dialog.component.css'
})
export default class NewTaskFormDialogComponent
{
  @Input({ required: true })
  userId?: string

  @Output()
  onCloseDialog = new EventEmitter<boolean>()

  @Output()
  submitted = new EventEmitter<FormFields>()

  public title: string = ""
  public summary: string = ""
  public dueDate: string = ""

  private tasksService = inject(TasksService)

  onCancel(): void
  {
    this.onCloseDialog.emit(false)
  }

  onSubmit(): void
  {
    this.tasksService.addTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId as string)

    this.onCloseDialog.emit(false)
  }
}
