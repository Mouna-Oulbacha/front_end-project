import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BudgetCreateComponent} from "./view/budgets/budget-create/budget-create.component";
import {BudgetListComponent} from "./view/budgets/budget-list/budget-list.component";
import {LoginComponent} from "./view/login/login.component";
export const components = [LoginComponent,BudgetCreateComponent,BudgetListComponent];
const routes: Routes = [
  {path: 'login', component : components[0]},
  {path: 'budget-create', component : components[1]},
  {path: 'budget-list', component : components[2]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
