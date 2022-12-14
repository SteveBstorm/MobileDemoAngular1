import { ConsoapiService, User } from './consoapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  listeUser! : User[]
  error! : string
  constructor(
    private apiService : ConsoapiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllUser().subscribe({
      next : (data : User[]) => {
        this.listeUser = data
        console.log(this.listeUser)
      },
      error : (error) => {
        this.error = error.statusText
      },
      complete : () => {
        console.log("j'ai fini de bosser")
      }
    })
  }

  envoi() {
    this.apiService.addUser()
  }

}
