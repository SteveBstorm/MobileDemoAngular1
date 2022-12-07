import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo2liste',
  templateUrl: './exo2liste.component.html',
  styleUrls: ['./exo2liste.component.scss']
})
export class Exo2listeComponent implements OnInit {

  @Input() listeArticle! : string[]

  @Output() deleteEvent : EventEmitter<number> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  deleteMethod(index : number){
    this.deleteEvent.next(index)
  }

}
