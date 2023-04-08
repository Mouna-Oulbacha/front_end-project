import {Component, OnInit} from '@angular/core';

import {CategorieAppelAchat} from "src/app/controller/model/categorie-appel-achat.model";
import {CategorieAppelAchatService} from "src/app/controller/service/categorie-appel-achat.service";
import {AppelAchatProduit} from "../../../controller/model/appel-achat-produit.model";

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
    this.categorieAppelAchatService.save().subscribe((data )=> {
      if (data != null){
        this.categorieAppelAchats.push(this.clone({...this.categorieAppelAchat}));
        alert('SAVE SUCCESS')
      }else {
        alert('SAVE ERROR ::: REF EXIST')
      }alert (data)
    })
  }

  get _categorieAppelAchat(): CategorieAppelAchat {
    return this.categorieAppelAchatService.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this.categorieAppelAchatService.categorieAppelAchat = value;
  }

  get categorieAppelAchats(): Array<CategorieAppelAchat> {
    return this.categorieAppelAchatService.categorieAppelAchats;
  }

  set categorieAppelAchats(value: Array<CategorieAppelAchat>) {
    this.categorieAppelAchatService.categorieAppelAchats = value;
  }

  private clone(categorieAppelAchat: CategorieAppelAchat) {
    let myClone=new CategorieAppelAchat();
    myClone.id=categorieAppelAchat.id;
    myClone.code = categorieAppelAchat.code;
    myClone.libelle = categorieAppelAchat.libelle;

    return myClone;
  }


}
