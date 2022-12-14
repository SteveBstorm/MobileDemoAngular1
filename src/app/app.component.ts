import { FakeauthService } from './components/demo/demo5/fakeauth.service';
import { Link } from 'src/app/shared/models/link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DemoMobile2022';

  isConnected! : boolean
  constructor(
    private authService : FakeauthService
    ){}
  ngOnInit(): void {
      //this.isConnected = this.authService.isConnected
      this.authService.isConnectedSubject.subscribe({
        next : (data : boolean) => { this.isConnected = data},
        error : () => {},
        complete : () => {}
      })
  }

  menu : Link[] = [
    {title : "Home", url : "home"},
    {title : "Demo", children :  [
      {title : "Bindings", url : "demo/demo1"},
      {title : "Pipes", url : "demo/demo2"},
      {title : "Directives", url : "demo/demo3"},
      {title : "@Input/@Output", url : "demo/demo4"},
      {title : "Services", url : "demo/demo5"},
      {title : "Routing", url : "demo/demo6"},
      {title : "Formulaire", url : "demo/demo7"},
      {title : "ConsoAPI", url : "demo/demo8"},
    ]},
    {title : "Exercices", children : [
      {title : "Chronomètre", url : "exercice/exo1"},
      {title : "Shopping List", url : "exercice/exo2"},
      {title : "Shopping List V2", url : "exercice/exo3"}
    ]}
  ]
}
