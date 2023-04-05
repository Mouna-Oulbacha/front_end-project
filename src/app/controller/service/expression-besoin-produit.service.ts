import { Injectable } from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin.model";

import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoinProduit} from "../model/expression-besoin-produit.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinProduitService {

  private _expressoinBesoinProduit : ExpressionBesoinProduit;
  private _expressoinBesoinProduits : Array <ExpressionBesoinProduit>;
  private url = environment.baseUrl + 'expressionBesoinProduit/';

  public save (): Observable<ExpressionBesoinProduit >{
    return this.http.post<ExpressionBesoinProduit>(this.url,this._expressoinBesoinProduit);
  }
  public deleteByCode(code: string): Observable<number>{

    return this.http.delete<number>(this.url +'code/'+code);
  }
  public findAll (): Observable<Array<ExpressionBesoinProduit>>{
    return this.http.get< Array<ExpressionBesoinProduit>>(this.url);
  }
  constructor(private _http: HttpClient) { }

  get expressoinBesoinProduit(): ExpressionBesoinProduit {
    if (this._expressoinBesoinProduit == null){
      this._expressoinBesoinProduit = new ExpressionBesoinProduit();
    }
    return this._expressoinBesoinProduit;
  }

  set expressoinBesoinProduit(value: ExpressionBesoinProduit) {
    this._expressoinBesoinProduit = value;
  }

  get expressoinBesoinProduits(): Array<ExpressionBesoinProduit> {
    if (this._expressoinBesoinProduits == null){
      this._expressoinBesoinProduits = new Array<ExpressionBesoinProduit>();
    }
    return this._expressoinBesoinProduits;
  }

  set expressoinBesoinProduits(value: Array<ExpressionBesoinProduit>) {

    this._expressoinBesoinProduits = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }


}
