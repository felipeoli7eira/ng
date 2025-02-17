import { Component } from "@angular/core";

import HeaderComponent from "./header.component";
import UserComponent from "./user/user.component";
import TasksComponent from "./tasks/tasks.component"

import { DUMMY_USERS} from "./user/users"
import { DUMMY_USER } from "./user/user.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent
{
  private users = DUMMY_USERS
  private selectedUser?: DUMMY_USER

  get getSelectedUser(): DUMMY_USER | undefined
  {
    return this.selectedUser
  }

  get getUsers(): DUMMY_USER[]
  {
    return this.users
  }

  onSelectUser(id: string): void
  {
    const selectedUser = this.users.find(u => u.id === id)

    if (this.selectedUser && id === this.selectedUser.id) {
      this.selectedUser = undefined
      return
    }

    if (selectedUser) {
      this.selectedUser = selectedUser
      return
    }

    this.selectedUser = undefined
  }
}
