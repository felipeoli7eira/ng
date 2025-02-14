import { Component } from '@angular/core';
import { DUMMY_USERS, type DYMMY_USER } from "./users"

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent
{
  selectedUser: DYMMY_USER = DUMMY_USERS[randomUser]
}
