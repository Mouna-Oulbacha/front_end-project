import { Injectable } from '@angular/core';
import {AppelAchatProduit} from "../model/appel-achat-produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AppelAchatProduitService {

  private _appelAchatProduit: AppelAchatProduit;
  private _appelAchatProduits: Array<AppelAchatProduit>;
  private url = environment.baseUrl + 'appelAchatProduit/';

  public save(): Observable<AppelAchatProduit>{
    return this.http.post<AppelAchatProduit> (this.url,this._appelAchatProduit);
  }
  public deleteByCode(code: string): Observable<number>{
    console.log('urrrrlll ==> ' + this.url + 'code/' + code);
    return this.http.delete<number> (this.url + 'code/' + code);
  }
  public findAll(): Observable<Array<AppelAchatProduit>>{
    return this.http.get<Array<AppelAchatProduit>> (this.url);
  }
  constructor(private http: HttpClient) { }



  get appelAchatProduit(): AppelAchatProduit {
    if(this._appelAchatProduit == null){
      this._appelAchatProduit = new AppelAchatProduit();
    }

    return this._appelAchatProduit;
  }

  set appelAchatProduit(value: AppelAchatProduit) {
    this._appelAchatProduit = value;
  }

  get appelAchatProduits(): Array<AppelAchatProduit> {
    if(this._appelAchatProduits == null){
      this._appelAchatProduits = new Array<AppelAchatProduit>();
    }

    return this._appelAchatProduits;
  }

  set appelAchatProduits(value: Array<AppelAchatProduit>) {
    this._appelAchatProduits = value;
  }
}
