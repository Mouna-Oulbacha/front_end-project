import {Component, OnInit} from '@angular/core';
import { CategorieProduit } from 'src/app/controller/model/categorie-produit';
import {CategorieProduitService} from "../../../controller/service/categorie-produit.service";

@Component({
  selector: 'app-categorie-produit-list',
  templateUrl: './categorie-produit-list.component.html',
  styleUrls: ['./categorie-produit-list.component.css']
})
export class CategorieProduitListComponent implements OnInit{
  constructor(private categorieProduitService: CategorieProduitService){
  }
  ngOnInit(): void {
    this.findAll();
  }

  public deleteByCode(categorieProduit: CategorieProduit, index: number): void{
    console.log('haaa code' + categorieProduit.code);
    this.categorieProduitService.deleteByCode(categorieProduit.code).subscribe(data => {
      if (data > 0){
        this.categorieProduits.splice(index,1);
      }else{
        alert('DEl ERROR');
      }
    });
  }


  public findAll(): void{
    this.categorieProduitService.findAll().subscribe(data => this.categorieProduits = data);
  }

  get categorieProduit(): CategorieProduit {

    return this.categorieProduitService.categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this.categorieProduitService.categorieProduit = value;
  }

  get categorieProduits(): Array<CategorieProduit> {

    return this.categorieProduitService.categorieProduits;
  }

  set categorieProduits(value: Array<CategorieProduit>) {
    this.categorieProduitService.categorieProduits = value;
  }


}
