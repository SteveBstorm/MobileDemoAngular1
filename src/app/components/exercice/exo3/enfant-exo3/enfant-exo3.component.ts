import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ServiceExo3Service } from '../service-exo3.service';

@Component({
  selector: 'app-enfant-exo3',
  templateUrl: './enfant-exo3.component.html',
  styleUrls: ['./enfant-exo3.component.scss']
})
export class EnfantExo3Component implements OnInit {

  liste! : Article[]
  constructor(
    private service : ServiceExo3Service
  ) { }

  ngOnInit(): void {
    this.liste = this.service.listeArticle
  }

  supprimerArticle(index : number) {
    this.service.deleteArticle(index)
  }

  ajouter(index : number){
    this.service.addQty(index)
  }

  retirer(index : number){
    this.service.remQty(index)
  }
}
