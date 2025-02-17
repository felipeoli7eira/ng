import { CardComponent } from '../ui/card/card.component';
import { type DUMMY_USER } from './user.model';
import { Component, computed, EventEmitter, Input, input, InputSignal, Output, output } from "@angular/core"

@Component({
  selector: "app-user",
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css"
})
export default class UserComponent
{
  @Input({ required: true })
  user?: DUMMY_USER

  @Input({ required: true })
  selected: boolean = false
  // @Input({ required: true }) id!: string

  // @Input({ required: true }) avatar!: string
  // avatar: InputSignal<string> = input.required<string>()

  // @Input({ required: true }) name!: string
  // name: InputSignal<string> = input.required<string>()

  // getAvatarPath = computed(() => "/assets/users/".concat(this.avatar()))

  // @Output() select = new EventEmitter<string>()
  select = output<string>()


  get getAvatarPath(): string
  {
    return "/assets/users/".concat(this.user?.avatar ?? "")
  }

  onSelectUser(): void
  {
    this.select.emit(this.user?.id ?? "")
  }
}
