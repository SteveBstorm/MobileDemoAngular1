import { FakeauthService } from './fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  status! : boolean

  constructor(
    private _monService : FakeauthService
  ) { }

  ngOnInit(): void {
    this._monService.isConnectedSubject.subscribe({
      next : (data : boolean) => { this.status = data},
      error : () => {},
      complete : () => {}
    })
  }

  mylogin() {
    this._monService.login()
    this.status = this._monService.isConnected
  }
  mylogout() {
    this._monService.logout()
    this.status = this._monService.isConnected
  }

}
