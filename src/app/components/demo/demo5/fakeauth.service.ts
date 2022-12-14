import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  get isConnected() : boolean {
    let value = JSON.parse(localStorage.getItem('status') ?? "false")
    return value;
  }

  //isConnectedSubject : Subject<boolean> = new Subject<boolean>()
  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)
  emitSubjectValue(){
    this.isConnectedSubject.next(this.isConnected)
  }

  constructor() { }

  login() {
    //this.isConnected = true
    //sessionStorage.setItem('status', 'true')
    localStorage.setItem('status', 'true')
    this.emitSubjectValue()
  }

  logout() {
    //this.isConnected = false
    localStorage.removeItem('status')
    this.emitSubjectValue()

  }
}
