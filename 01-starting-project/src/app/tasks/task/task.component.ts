import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export default class TaskComponent
{
  @Input({ required: true }) task?: Task
  @Output() onCompleted = new EventEmitter<string>()

  get getTitle(): string
  {
    return this.task?.title ?? ''
  }

  get getDueDate(): string
  {
    return this.task?.dueDate ?? ''
  }

  get getSummary(): string
  {
    return this.task?.summary ?? ''
  }

  get getId(): string
  {
    return this.task?.id ?? ''
  }

  get getUserId(): string
  {
    return this.task?.userId ?? ''
  }

  complete(): void
  {
    this.onCompleted.emit(this.task?.id)
  }
}
