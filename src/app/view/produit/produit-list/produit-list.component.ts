import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../controller/service/produit.service";
import {Produit} from "../../../controller/model/produit";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  constructor(private produitService: ProduitService){

  }
  ngOnInit(): void {
    this.findAll();
  }

  public deleteByCode(  produit: Produit, index: number): void{
    console.log('haaa code' + produit.code);
    this.produitService.deleteByCode(produit.code).subscribe(data => {
      if (data > 0){
        this.produits.splice(index,1);
      }else{
        alert('DEl ERROR');
      }
    });
  }
  public findAll(): void{
    this.produitService.findAll().subscribe(data => this.produits = data);
  }

  get produit(): Produit{

    return this.produitService.produit;
  }

  set produit(value: Produit) {
    this.produitService.produit = value;
  }

  get produits(): Array<Produit> {

    return this.produitService.produits;
  }

  set produits(value: Array<Produit>) {
    this.produitService.produits = value;
  }
}
