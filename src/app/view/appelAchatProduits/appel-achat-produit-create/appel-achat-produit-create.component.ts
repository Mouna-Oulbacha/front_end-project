import {Component, OnInit} from '@angular/core';
import {AppelAchatProduitService} from "src/app/controller/service/appel-achat-produit.service";
import {HttpClient} from "@angular/common/http";
import {AppelAchatProduit} from "src/app/controller/model/appel-achat-produit.model";
import {CategorieEntiteAdmin} from "../../../controller/model/categorie-entite-admin.model";

@Component({
  selector: 'app-appel-achat-produit-create',
  templateUrl: './appel-achat-produit-create.component.html',
  styleUrls: ['./appel-achat-produit-create.component.css']
})
export class AppelAchatProduitCreateComponent implements OnInit{


  constructor(private appelAchatProduitService: AppelAchatProduitService ) {

  }
  ngOnInit(): void {
  }

  public save(): void{
    this.appelAchatProduitService.save().subscribe((data )=> {
      if (data != null){
        this.appelAchatProduits.push(this.clone({...this.appelAchatProduit}));

        alert('SAVE SUCCESS')
      }else {
        alert('SAVE ERROR ::: REF EXIST')
      }  alert (data)
    });
  }

  get _appelAchatProduit(): AppelAchatProduit {

    return this.appelAchatProduitService.appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this.appelAchatProduitService.appelAchatProduit = value;
  }

  get appelAchatProduits(): Array<AppelAchatProduit> {

    return this.appelAchatProduitService.appelAchatProduits;
  }

  set appelAchatProduits(value: Array<AppelAchatProduit>) {
    this.appelAchatProduitService.appelAchatProduits = value;
  }

  private clone(appelAchatProduit: AppelAchatProduit) {
    let myClone=new AppelAchatProduit();
    myClone.id=appelAchatProduit.id;
    myClone.code = appelAchatProduit.code;
    myClone.qteProduit = appelAchatProduit.qteProduit;
    myClone.qteRecep = appelAchatProduit.qteRecep;
    myClone.qteLivr = appelAchatProduit.qteLivr;
    myClone.appelAchat = appelAchatProduit.appelAchat;
    myClone.produit = appelAchatProduit.produit;

    return myClone;
  }

}
