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
import { AppelAchatCreateComponent } from './view/appelAchats/appel-achat-create/appel-achat-create.component';
import { AppelAchatListComponent } from './view/appelAchats/appel-achat-list/appel-achat-list.component';
import { AppelAchatViewComponent } from './view/appelAchats/appel-achat-view/appel-achat-view.component';
import { AppelAchatEditComponent } from './view/appelAchats/appel-achat-edit/appel-achat-edit.component';
import { AppelAchatProduitCreateComponent } from './view/appelAchatProduits/appel-achat-produit-create/appel-achat-produit-create.component';
import { AppelAchatProduitListComponent } from './view/appelAchatProduits/appel-achat-produit-list/appel-achat-produit-list.component';
import { AppelAchatProduitViewComponent } from './view/appelAchatProduits/appel-achat-produit-view/appel-achat-produit-view.component';
import { AppelAchatProduitEditComponent } from './view/appelAchatProduits/appel-achat-produit-edit/appel-achat-produit-edit.component';
import { CategorieAppelAchatCreateComponent } from './view/categorieAppelAchats/categorie-appel-achat-create/categorie-appel-achat-create.component';
import { CategorieAppelAchatListComponent } from './view/categorieAppelAchats/categorie-appel-achat-list/categorie-appel-achat-list.component';
import { CategorieAppelAchatViewComponent } from './view/categorieAppelAchats/categorie-appel-achat-view/categorie-appel-achat-view.component';
import { CategorieAppelAchatEditComponent } from './view/categorieAppelAchats/categorie-appel-achat-edit/categorie-appel-achat-edit.component';
import { EntiteAdminCreateComponent } from './view/entiteAdmins/entite-admin-create/entite-admin-create.component';
import { EntiteAdminListComponent } from './view/entiteAdmins/entite-admin-list/entite-admin-list.component';
import { EntiteAdminEditComponent } from './view/entiteAdmins/entite-admin-edit/entite-admin-edit.component';
import { EntiteAdminViewComponent } from './view/entiteAdmins/entite-admin-view/entite-admin-view.component';
import { CategorieEntiteAdminCreateComponent } from './view/categorieEntiteAdmins/categorie-entite-admin-create/categorie-entite-admin-create.component';
import { CategorieEntiteAdminListComponent } from './view/categorieEntiteAdmins/categorie-entite-admin-list/categorie-entite-admin-list.component';
import { CategorieEntiteAdminEditComponent } from './view/categorieEntiteAdmins/categorie-entite-admin-edit/categorie-entite-admin-edit.component';
import { CategorieEntiteAdminViewComponent } from './view/categorieEntiteAdmins/categorie-entite-admin-view/categorie-entite-admin-view.component';

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
    LoginComponent,
    AppelAchatCreateComponent,
    AppelAchatListComponent,
    AppelAchatViewComponent,
    AppelAchatEditComponent,
    AppelAchatProduitCreateComponent,
    AppelAchatProduitListComponent,
    AppelAchatProduitViewComponent,
    AppelAchatProduitEditComponent,
    CategorieAppelAchatCreateComponent,
    CategorieAppelAchatListComponent,
    CategorieAppelAchatViewComponent,
    CategorieAppelAchatEditComponent,
    EntiteAdminCreateComponent,
    EntiteAdminListComponent,
    EntiteAdminEditComponent,
    EntiteAdminViewComponent,
    CategorieEntiteAdminCreateComponent,
    CategorieEntiteAdminListComponent,
    CategorieEntiteAdminEditComponent,
    CategorieEntiteAdminViewComponent
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
