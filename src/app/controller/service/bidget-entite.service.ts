import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Budget} from "../model/budget.model";
import {environment} from "../../../environments/environment";
import {BudgetEntite} from "../model/budget-entite.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BidgetEntiteService {
  private _budgetEntite: BudgetEntite;
  private _budgetEntites: Array<BudgetEntite>;
  private url = environment.baseUrl + 'budgetEntite/' ;

  public save(): Observable<BudgetEntite>{
    return this.http.post<BudgetEntite>(this.url, this.budgetEntite);
  }

  public deleteByCode(code: String): Observable<BudgetEntite>{
    return this.http.post<BudgetEntite>(this.url, this.budgetEntite);
  }

  public findAll(): Observable<Array<BudgetEntite>>{
    return this.http.get<Array<BudgetEntite>>(this.url);
  }

  constructor(private http: HttpClient) { }


  get budgetEntite(): BudgetEntite {
    if (this._budgetEntite == null){
      this._budgetEntite = new BudgetEntite();
    }
    return this._budgetEntite;
  }

  set budgetEntite(value: BudgetEntite) {
    this._budgetEntite = value;
  }

  get budgetEntites(): Array<BudgetEntite> {
    if (this._budgetEntites == null){
      this._budgetEntites = new Array<BudgetEntite>();
    }
    return this._budgetEntites;
  }

  set budgetEntites(value: Array<BudgetEntite>) {
    this._budgetEntites = value;
  }
}
