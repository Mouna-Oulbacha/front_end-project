import {Component, OnInit} from '@angular/core';
import {BidgetEntiteService} from "../../../controller/service/bidget-entite.service";
import {BudgetEntite} from "../../../controller/model/budget-entite.model";

@Component({
  selector: 'app-budget-entite-list',
  templateUrl: './budget-entite-list.component.html',
  styleUrls: ['./budget-entite-list.component.css']
})
export class BudgetEntiteListComponent implements OnInit {

  constructor(private budgetEntiteService: BidgetEntiteService) { }

  ngOnInit(): void {
    this.findAll();
  }


  public findAll(): void{
    this.budgetEntiteService.findAll().subscribe(data => this.budgetEntites = data );
  }
  public delete(index: number){
    this.budgetEntites.splice(index,1);
  }




  get budgetEntite(): BudgetEntite {
    return this.budgetEntiteService.budgetEntite;
  }

  set budgetEntite(value: BudgetEntite) {
    this.budgetEntiteService.budgetEntite = value;
  }

  get budgetEntites(): Array<BudgetEntite> {
    return this.budgetEntiteService.budgetEntites;
  }

  set budgetEntites(value: Array<BudgetEntite>) {
    this.budgetEntiteService.budgetEntites = value;
  }

}
