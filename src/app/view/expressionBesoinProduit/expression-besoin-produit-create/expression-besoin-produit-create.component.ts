import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";
import {ExpressionBesoinProduitService} from "../../../controller/service/expression-besoin-produit.service";
import {ExpressionBesoinProduit} from "../../../controller/model/expression-besoin-produit.model";

@Component({
  selector: 'app-expression-besoin-produit-create',
  templateUrl: './expression-besoin-produit-create.component.html',
  styleUrls: ['./expression-besoin-produit-create.component.css']
})
export class ExpressionBesoinProduitCreateComponent implements OnInit {
  constructor(private expressionBesoinProduitService: ExpressionBesoinProduitService){}
  ngOnInit(): void{

  }
  public save ():void{
    this.expressionBesoinProduitService.save().subscribe(data => {
      if(data !=null){

        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR ::: REF EXIST');
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
