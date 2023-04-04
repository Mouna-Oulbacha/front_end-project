import {Component, OnInit} from '@angular/core';
import {AppelAchatProduit} from "src/app/controller/model/appel-achat-produit.model";
import {AppelAchatProduitService} from "src/app/controller/service/appel-achat-produit.service";

@Component({
  selector: 'app-appel-achat-produit-list',
  templateUrl: './appel-achat-produit-list.component.html',
  styleUrls: ['./appel-achat-produit-list.component.css']
})
export class AppelAchatProduitListComponent implements OnInit{

  constructor(private appelAchatProduitService: AppelAchatProduitService ) {

  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.appelAchatProduitService.findAll().subscribe(data=> this.appelAchatProduits = data);
  }
  public deleteByCode(appelAchatProduit: AppelAchatProduit, index: number): void{
    console.log('haaa code ' + appelAchatProduit.code);
    this.appelAchatProduitService.deleteByCode(appelAchatProduit.code).subscribe(data=> {
      if (data > 0){
        this.appelAchatProduits.splice(index,1);
      }else{
        alert('DEL ERROR');
      }
    });
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
