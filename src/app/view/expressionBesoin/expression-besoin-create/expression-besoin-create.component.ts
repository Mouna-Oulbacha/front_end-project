import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from "src/app/controller/service/expression-besoin.service";
import {ExpressionBesoin} from "src/app/controller/model/expression-besoin.model";


@Component({
  selector: 'app-expression-besoin-create',
  templateUrl: './expression-besoin-create.component.html',
  styleUrls: ['./expression-besoin-create.component.css']
})
export class ExpressionBesoinCreateComponent implements OnInit {
  constructor(private expressionBesoinService: ExpressionBesoinService){}
  ngOnInit(): void{

  }
  public save ():void{
    this.expressionBesoinService.save().subscribe(data => {
      if(data !=null){
        this.expressoinBesoins.push(this.clone({...this.expressoinBesoin}));
        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR ::: REF EXIST');
      }
    });
  }
  get expressoinBesoin(): ExpressionBesoin {

    return this.expressionBesoinService.expressoinBesoin;
  }

  set expressoinBesoin(value: ExpressionBesoin) {
    this. expressionBesoinService.expressoinBesoin= value;
  }

  get expressoinBesoins(): Array<ExpressionBesoin> {

    return this.expressionBesoinService.expressoinBesoins;
  }

  set expressoinBesoins(value: Array<ExpressionBesoin>) {

    this.expressionBesoinService.expressoinBesoins = value;
  }
  private clone (expressinBesoin: ExpressionBesoin) {
    let myClone=new ExpressionBesoin();
    myClone.id = expressinBesoin.id;
    myClone.ref =expressinBesoin.ref;
    myClone. total= expressinBesoin.total;
    myClone.budgetEntite = expressinBesoin.budgetEntite;
    myClone.dateExpressionBesoin = expressinBesoin.dateExpressionBesoin;
    myClone.expressionBesoinProduits = expressinBesoin.expressionBesoinProduits;
    return myClone;
  }
}

