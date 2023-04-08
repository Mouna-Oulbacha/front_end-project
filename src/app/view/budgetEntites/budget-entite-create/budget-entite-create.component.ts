import {Component, OnInit} from '@angular/core';
import {BudgetService} from "../../../controller/service/budget.service";
import {BudgetEntite} from "src/app/controller/model/budget-entite.model";
import {BidgetEntiteService} from "src/app/controller/service/bidget-entite.service";
import {Budget} from "../../../controller/model/budget.model";

@Component({
  selector: 'app-budget-entite-create',
  templateUrl: './budget-entite-create.component.html',
  styleUrls: ['./budget-entite-create.component.css']
})
export class BudgetEntiteCreateComponent implements OnInit {
  constructor(private budgetEntiteService: BidgetEntiteService) { }

  ngOnInit(): void {}

  public save(): void{
    this.budgetEntiteService.save().subscribe( data => {
      if(data != null){
        this.budgetEntites.push({...this.budgetEntite});
        alert('Save Success');
      }
      else{
        alert('Save Error');
      }
    } );
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
