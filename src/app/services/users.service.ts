import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/request-response';
import { HttpClient } from '@angular/common/http';
import { delay,map } from 'rxjs';

interface State {
  user : User[];
  loading : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    user: []
  })

  public users = computed(() => this.#state().user);
  public loading = computed(() => this.#state().loading);

  constructor() { 
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1000))
      .subscribe(res => {
        this.#state.set({
          loading : false,
          user : res.data
        })
      })
  }

  //obtener un usuario por id
  getUserByID( id : string )  {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1000),
        map(resp => resp.data)
    )
  }
}
