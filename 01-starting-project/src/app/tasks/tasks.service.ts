import { Injectable } from "@angular/core";
import { FormFields } from "./new-task-form-dialog/form.model";
import { Task } from "./task/task.model";

@Injectable({
  providedIn: "root"
})
export default class TasksService
{
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor()
  {
    let tasks = localStorage.getItem('tasks')
    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  private saveTasks(): void
  {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  get getTasks(): Task[]
  {
    return this.tasks
  }

  getSelectedUserTasks(userId: string): Task[]
  {
    if (userId.trim().length) {
      return this.tasks.filter(t => t.userId === userId)
    }

    return []
  }

  addTask(formFields: FormFields, userId: string): void
  {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId,
      title: formFields.title,
      summary: formFields.summary,
      dueDate: formFields.dueDate
    })
    this.saveTasks()
  }

  taskCompleted(id: string): void
  {
    this.tasks = this.tasks.filter(t => t.id !== id)
    this.saveTasks()
  }
}
