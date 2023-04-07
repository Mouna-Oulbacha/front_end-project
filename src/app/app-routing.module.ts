import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BudgetCreateComponent} from "./view/budgets/budget-create/budget-create.component";
import {BudgetListComponent} from "./view/budgets/budget-list/budget-list.component";
import {LoginComponent} from "./view/login/login.component";
import {AppelAchatCreateComponent} from "./view/appelAchats/appel-achat-create/appel-achat-create.component";
import {AppelAchatListComponent} from "./view/appelAchats/appel-achat-list/appel-achat-list.component";
import {
  AppelAchatProduitCreateComponent
} from "./view/appelAchatProduits/appel-achat-produit-create/appel-achat-produit-create.component";
import {
  AppelAchatProduitListComponent
} from "./view/appelAchatProduits/appel-achat-produit-list/appel-achat-produit-list.component";
import {
  CategorieAppelAchatCreateComponent
} from "./view/categorieAppelAchats/categorie-appel-achat-create/categorie-appel-achat-create.component";
import {
  CategorieAppelAchatListComponent
} from "./view/categorieAppelAchats/categorie-appel-achat-list/categorie-appel-achat-list.component";
import {EntiteAdminCreateComponent} from "./view/entiteAdmins/entite-admin-create/entite-admin-create.component";
import {EntiteAdminListComponent} from "./view/entiteAdmins/entite-admin-list/entite-admin-list.component";
import {
  CategorieEntiteAdminCreateComponent
} from "./view/categorieEntiteAdmins/categorie-entite-admin-create/categorie-entite-admin-create.component";
import {
  CategorieEntiteAdminListComponent
} from "./view/categorieEntiteAdmins/categorie-entite-admin-list/categorie-entite-admin-list.component";
import {ProduitCreateComponent} from "./view/produit/produit-create/produit-create.component";
import {ProduitListComponent} from "./view/produit/produit-list/produit-list.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";
import {
  CategorieProduitListComponent
} from "./view/categorieProduit/categorie-produit-list/categorie-produit-list.component";
import {
  ExpressionBesoinCreateComponent
} from "./view/expressionBesoin/expression-besoin-create/expression-besoin-create.component";
import {
  ExpressionBesoinListComponent
} from "./view/expressionBesoin/expression-besoin-list/expression-besoin-list.component";
import {
  ExpressionBesoinProduitCreateComponent
} from "./view/expressionBesoinProduit/expression-besoin-produit-create/expression-besoin-produit-create.component";
import {
  ExpressionBesoinProduitListComponent
} from "./view/expressionBesoinProduit/expression-besoin-produit-list/expression-besoin-produit-list.component";
import {BudgetEntiteCreateComponent} from "./view/budgetEntites/budget-entite-create/budget-entite-create.component";
import {BudgetEntiteListComponent} from "./view/budgetEntites/budget-entite-list/budget-entite-list.component";
export const components = [LoginComponent,BudgetCreateComponent,BudgetListComponent,BudgetEntiteCreateComponent,BudgetEntiteListComponent,AppelAchatCreateComponent,AppelAchatListComponent,AppelAchatProduitCreateComponent,AppelAchatProduitListComponent,CategorieAppelAchatCreateComponent,CategorieAppelAchatListComponent,EntiteAdminCreateComponent,EntiteAdminListComponent,CategorieEntiteAdminCreateComponent,CategorieEntiteAdminListComponent,ProduitCreateComponent,ProduitListComponent,CategorieProduitCreateComponent,CategorieProduitListComponent,ExpressionBesoinCreateComponent,ExpressionBesoinListComponent,ExpressionBesoinProduitCreateComponent,ExpressionBesoinProduitListComponent];
const routes: Routes = [
  {path: 'login', component : components[0]},
  {path: 'budget-create', component : components[1]},
  {path: 'budget-list', component : components[2]},
  {path: 'budget-entite-create', component : components[3]},
  {path: 'budget-entite-list', component : components[4]},
  {path: 'appel-achat-create', component : components[5]},
  {path: 'appel-achat-list', component : components[6]},
  {path: 'appel-achat-produit-create', component : components[7]},
  {path: 'appel-achat-produit-list', component : components[8]},
  {path: 'categorie-appel-achat-create', component : components[9]},
  {path: 'categorie-appel-achat-list', component : components[10]},
  {path: 'entite-admin-create', component : components[11]},
  {path: 'entite-admin-list', component : components[12]},
  {path: 'categorie-entite-admin-create', component : components[13]},
  {path: 'categorie-entite-admin-list', component : components[14]},
  {path: 'produit-create', component : components[15]},
  {path: 'produit-list', component : components[16]},
  {path: 'categorie-produit-create', component : components[17]},
  {path: 'categorie-produit-list', component : components[18]},
  {path: 'expression-besoin-create', component : components[19]},
  {path: 'expression-besoin-list', component : components[20]},
  {path: 'expression-besoin-produit-create', component : components[21]},
  {path: 'expression-besoin-produit-list', component : components[22]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
