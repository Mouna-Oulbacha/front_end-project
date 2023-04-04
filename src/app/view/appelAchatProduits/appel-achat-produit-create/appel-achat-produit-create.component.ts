import {Component, OnInit} from '@angular/core';
import {AppelAchatProduitService} from "src/app/controller/service/appel-achat-produit.service";
import {HttpClient} from "@angular/common/http";
import {AppelAchatProduit} from "src/app/controller/model/appel-achat-produit.model";

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
    this.appelAchatProduitService.save().subscribe(data => {

      if(data != null){
        this.appelAchatProduits.push({...this.appelAchatProduit});
        this.appelAchatProduitService.appelAchatProduit==null;
        alert('SAVE SUCCESS')
      }else {
        alert('SAVE ERROR ::: REF EXIST')
      }
    })
  }

  get appelAchatProduit(): AppelAchatProduit {

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

}
