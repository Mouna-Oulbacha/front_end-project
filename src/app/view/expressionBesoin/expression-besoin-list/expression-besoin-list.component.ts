import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from "../../../controller/service/expression-besoin.service";
import {ExpressionBesoin} from "../../../controller/model/expression-besoin.model";

@Component({
  selector: 'app-expression-besoin-list',
  templateUrl: './expression-besoin-list.component.html',
  styleUrls: ['./expression-besoin-list.component.css']
})
export class ExpressionBesoinListComponent implements OnInit {
  constructor(private expressionBesoinService: ExpressionBesoinService){}
  ngOnInit(): void{
    this.findAll();
  }
  public findAll (): void{
    this.expressionBesoinService.findAll().subscribe(data=>  this.expressoinBesoins = data);
  }
  public deleteByRef ( expressionBesoin: ExpressionBesoin ,index: number): void{
    console.log('haaa ref'+expressionBesoin.ref);
    this.expressionBesoinService.deleteByRef(expressionBesoin.ref).subscribe(data=>  {
      if(data > 0){
        this.expressoinBesoins.splice(index,1);
      }else{
        alert('DEL ERROR');

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
}

