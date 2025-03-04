import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/request-response';
import {toSignal} from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  template : ``
})
export default class UserComponent {
  //titleLabel = Informacion del usuario : nombre del usuario select

  public titleLabel = computed(() => {
    if(this.user()){
      return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return 'Informacion del usuario'
  })
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService)
  // public user = signal<User | undefined>(undefined)

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserByID(id) )
    )
  )
}
