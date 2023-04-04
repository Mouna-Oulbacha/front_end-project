import {Component, OnInit} from '@angular/core';

import {CategorieAppelAchat} from "src/app/controller/model/categorie-appel-achat.model";
import {CategorieAppelAchatService} from "src/app/controller/service/categorie-appel-achat.service";

@Component({
  selector: 'app-categorie-appel-achat-create',
  templateUrl: './categorie-appel-achat-create.component.html',
  styleUrls: ['./categorie-appel-achat-create.component.css']
})
export class CategorieAppelAchatCreateComponent implements OnInit{


  constructor(private categorieAppelAchatService: CategorieAppelAchatService  ){

  }
  ngOnInit(): void {
  }

  public save(): void{
    this.categorieAppelAchatService.save().subscribe(data => {
      if(data != null){
        this.categorieAppelAchats.push({...this.categorieAppelAchat})
        this.categorieAppelAchatService.categorieAppelAchat == null;
        alert('SAVE SUCCESS')
      }else {
        alert('SAVE ERROR ::: REF EXIST')
      }
    })
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this.categorieAppelAchat = value;
  }

  get categorieAppelAchats(): Array<CategorieAppelAchat> {
    return this.categorieAppelAchats;
  }

  set categorieAppelAchats(value: Array<CategorieAppelAchat>) {
    this.categorieAppelAchats = value;
  }

}
