import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {ExpressionBesoinProduitService} from "../../../controller/service/expression-besoin-produit.service";
import {ExpressionBesoinProduit} from "../../../controller/model/expression-besoin-produit.model";

@Component({
  selector: 'app-expression-besoin-produit-list',
  templateUrl: './expression-besoin-produit-list.component.html',
  styleUrls: ['./expression-besoin-produit-list.component.css']
})
export class ExpressionBesoinProduitListComponent implements OnInit {
  constructor(private expressionBesoinProduitService: ExpressionBesoinProduitService){}
  ngOnInit(): void{
    this.findAll();
  }
  public findAll (): void{
    this.expressionBesoinProduitService.findAll().subscribe(data=>  this.expressoinBesoinProduits = data);
  }
  public deleteByCode ( expressionBesoinProduit: ExpressionBesoinProduit ,index: number): void{

    this.expressionBesoinProduitService.deleteByCode(expressionBesoinProduit.code).subscribe(data=>  {
      if(data > 0){
        this.expressoinBesoinProduits.splice(index,1);
      }else{
        alert('DEL ERROR');

      }
    });
  }


  get expressoinBesoinProduit(): ExpressionBesoinProduit {

    return this.expressionBesoinProduitService.expressoinBesoinProduit;
  }

  set expressoinBesoinProduit(value: ExpressionBesoinProduit) {
    this. expressionBesoinProduitService.expressoinBesoinProduit= value;
  }

  get expressoinBesoinProduits(): Array<ExpressionBesoinProduit> {

    return this.expressionBesoinProduitService.expressoinBesoinProduits;
  }

  set expressoinBesoinProduits(value: Array<ExpressionBesoinProduit>) {

    this.expressionBesoinProduitService.expressoinBesoinProduits = value;
  }
}
