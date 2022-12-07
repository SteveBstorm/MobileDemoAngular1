import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  maListe : string[] = []

  newArticle! : string

  constructor() { }

  ngOnInit(): void {
  }

  addArticle() {
    this.maListe.push(this.newArticle)
    this.newArticle = ""
  }

  removeArticle(index : number) {
    this.maListe.splice(index, 1)
  }

}
