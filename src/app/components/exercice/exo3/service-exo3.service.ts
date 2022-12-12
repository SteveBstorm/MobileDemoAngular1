import { Injectable } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceExo3Service {
  listeArticle : Article[] = []

  constructor() { }

  addArticle(article : string) {
    let index = this.listeArticle.findIndex(x => x.title.toLowerCase() == article.toLowerCase())
    if(index == -1)
        this.listeArticle.push({title : article, qtyChoice : 1})
    else this.addQty(index)
  }

  deleteArticle(index : number) {
    this.listeArticle.splice(index, 1)
  }

  addQty(index : number){
    this.listeArticle[index].qtyChoice++
  }

  remQty(index : number){
    (this.listeArticle[index].qtyChoice == 1)
      ? this.deleteArticle(index)
      : this.listeArticle[index].qtyChoice--
  }

  getById(index : number) : Article{
    return this.listeArticle[index]
  }
}
