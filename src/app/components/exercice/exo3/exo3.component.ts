import { Component, OnInit } from '@angular/core';
import { Article } from '../../../shared/models/article.model';
import { ServiceExo3Service } from './service-exo3.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  newArticle! : string
  constructor(
    private service : ServiceExo3Service
  ) { }

  ngOnInit(): void {
  }

  ajoutArticle() {
    this.service.addArticle(this.newArticle)
  }



}
