import {Component, OnInit} from '@angular/core';
import {CategorieProduitService} from "src/app/controller/service/categorie-produit.service";
import {CategorieProduit} from "src/app/controller/model/categorie-produit";

@Component({
  selector: 'app-categorie-produit-create',
  templateUrl: './categorie-produit-create.component.html',
  styleUrls: ['./categorie-produit-create.component.css']
})
export class CategorieProduitCreateComponent implements OnInit{
  constructor(private _categorieProduitService: CategorieProduitService) {
  }
  ngOnInit(): void {
  }
  public save():void{
    this._categorieProduitService.save().subscribe(data =>
    { if (data !=null){
      this.categorieProduits.push({...this.categorieProduit});
      this._categorieProduitService.categorieProduit == null;
      alert('SAVE SUCCESS');
    }else{
      alert('SAVE ERROR ::: RFF EXIST');
    }
    });
  }
  get categorieProduit(): CategorieProduit {

    return this._categorieProduitService.categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this._categorieProduitService.categorieProduit = value;
  }

  get categorieProduits(): Array<CategorieProduit> {

    return this._categorieProduitService.categorieProduits;
  }

  set categorieProduits(value: Array<CategorieProduit>) {
    this._categorieProduitService.categorieProduits = value;
  }

}
