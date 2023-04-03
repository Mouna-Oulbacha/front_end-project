import { Injectable } from '@angular/core';
import {Budget} from '../model/budget.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private _budget: Budget;
  private _budgets: Array<Budget>;
  private url = environment.baseUrl + 'budget/' ;
  public save(): Observable<Budget>{
    return this.http.post<Budget>(this.url, this.budget);
  }

  public deleteByCode(code: String): Observable<Budget>{
    return this.http.post<Budget>(this.url, this.budget);
  }

  public findAll(): Observable<Array<Budget>>{
    return this.http.get<Array<Budget>>(this.url);
  }

  constructor(private http: HttpClient) { }

  get budget(): Budget {
    if (this._budget == null){
      this._budget = new Budget();
    }
    return this._budget;
  }

  set budget(value: Budget) {
    this._budget = value;
  }

  get budgets(): Array<Budget> {
    if (this._budgets == null){
      this._budgets = new Array<Budget>();
    }
    return this._budgets;
  }

  set budgets(value: Array<Budget>) {
    this._budgets = value;
  }
}
