import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { BudgetCreateComponent } from './view/budgets/budget-create/budget-create.component';
import { BudgetEditComponent } from './view/budgets/budget-edit/budget-edit.component';
import { BudgetListComponent } from './view/budgets/budget-list/budget-list.component';
import { BudgetEntiteCreateComponent } from './view/budgetEntites/budget-entite-create/budget-entite-create.component';
import { BudgetEntiteViewComponent } from './view/budgetEntites/budget-entite-view/budget-entite-view.component';
import { BudgetEntiteListComponent } from './view/budgetEntites/budget-entite-list/budget-entite-list.component';
import { BudgetEntiteEditComponent } from './view/budgetEntites/budget-entite-edit/budget-entite-edit.component';
import { BudgetViewComponent } from './view/budgets/budget-view/budget-view.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { LoginComponent } from './view/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    components,
    BudgetCreateComponent,
    BudgetEditComponent,
    BudgetListComponent,
    BudgetEntiteCreateComponent,
    BudgetEntiteViewComponent,
    BudgetEntiteListComponent,
    BudgetEntiteEditComponent,
    BudgetViewComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
