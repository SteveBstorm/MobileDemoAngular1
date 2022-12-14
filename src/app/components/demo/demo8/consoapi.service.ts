import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoapiService {

  private url : string = environment.url

  constructor(
    private client : HttpClient
  ) { }

  getAllUser() : Observable<User[]> {
    return this.client.get<User[]>(this.url+ 'users')
  }

  addUser() {
    let newUser : User = {nom : "Perceval", email : "perceval@mail.com", role : "pignouf"}

    this.client.post(this.url+"users", newUser).subscribe({
      next : () => {console.log("ça a marché")}
    })
  }
}

export interface User {
  id? : number
  nom : string
  email : string
  role : string
}
