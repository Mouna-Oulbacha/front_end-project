import {Component, OnInit} from '@angular/core';
import {Budget} from "../../../controller/model/budget.model";
import {BudgetService} from "../../../controller/service/budget.service";

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit{

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.budgetService.findAll().subscribe(data => this.budgets = data );
  }
  public delete(index: number){
    this.budgets.splice(index,1);
  }








  get budget(): Budget {
    return this.budgetService.budget;
  }

  set budget(value: Budget) {
    this.budgetService.budget = value;
  }

  get budgets(): Array<Budget> {
    return this.budgetService.budgets;
  }

  set budgets(value: Array<Budget>) {
    this.budgetService.budgets = value;
  }

}
