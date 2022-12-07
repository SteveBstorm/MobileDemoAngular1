import { FakeauthService } from './../demo/demo5/fakeauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status! : boolean
  constructor(
    private _monService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.status = this._monService.isConnected
  }

}
