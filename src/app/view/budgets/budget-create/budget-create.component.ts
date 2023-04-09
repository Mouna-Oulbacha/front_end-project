import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BudgetService} from "src/app/controller/service/budget.service";
import {Budget} from "src/app/controller/model/budget.model";

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.css']
})
export class BudgetCreateComponent implements OnInit {
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {}

  public save(): void{
    this.budgetService.save().subscribe( data => {
      if(data != null){
        this.budgets.push({...this.budget});
        alert('Save Success');
      }
      else{
        alert('Save Error');
      }
    } );
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
