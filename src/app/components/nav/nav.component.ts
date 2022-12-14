import { FakeauthService } from './../demo/demo5/fakeauth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien! : Link[]

  isConnected! : boolean
  constructor(
    private service : FakeauthService
  ) { }

  ngOnInit(): void {
    //this.isConnected = this.service.isConnected

    this.service.isConnectedSubject.subscribe({
      next : (monStatut : boolean) => {
        this.isConnected = monStatut
        console.log("")
      }
    })
  }

  switchChildrenVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

  deconnexion() {
    this.service.logout()
  }

}
