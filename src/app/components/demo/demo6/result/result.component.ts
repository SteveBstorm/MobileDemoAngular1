import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceExo3Service } from 'src/app/components/exercice/exo3/service-exo3.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  valeur! : number
  article! : Article
  constructor(
    private ar : ActivatedRoute,
    private service : ServiceExo3Service
  ) { }

  ngOnInit(): void {
    this.valeur = this.ar.snapshot.params['toto']
    this.article = this.service.getById(this.valeur)
  }

}
