import { Injectable } from '@angular/core';
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinService {




  private _expressoinBesoin : ExpressionBesoin;
  private _expressoinBesoins : Array <ExpressionBesoin>;
  private url = environment.baseUrl + 'expressionBesoin/';

  public save (): Observable<ExpressionBesoin >{
    return this.http.post<ExpressionBesoin>(this.url,this.expressoinBesoin);
  }
  public deleteByRef( ref:string): Observable<number >{
    console.log('urrrlll==>'+this.url+'ref/'+ref);
    return this.http.delete<number>(this.url +'ref/'+ref);
  }
  public findAll (): Observable<Array<ExpressionBesoin>>{
    return this.http.get< Array<ExpressionBesoin>>(this.url);
  }
  constructor(private _http: HttpClient) { }

  get expressoinBesoin(): ExpressionBesoin {
    if (this._expressoinBesoin == null){
      this._expressoinBesoin = new ExpressionBesoin();
    }
    return this._expressoinBesoin;
  }

  set expressoinBesoin(value: ExpressionBesoin) {
    this._expressoinBesoin = value;
  }

  get expressoinBesoins(): Array<ExpressionBesoin> {
    if (this._expressoinBesoins == null){
      this._expressoinBesoins = new Array<ExpressionBesoin>();
    }
    return this._expressoinBesoins;
  }

  set expressoinBesoins(value: Array<ExpressionBesoin>) {

    this._expressoinBesoins = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}

