import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private _produit: Produit;
  private _produits: Array<Produit>;
  private url = environment.baseUrl + 'produit/';
  public save(): Observable<Produit>{
    return this.http.post<Produit>(this.url,this.produit);
  }

  public deleteByCode( code: String  ): Observable<number>{
    console.log('url ==> ' +this.url + 'code/'+ code);
    return this.http.delete<number>(this.url + 'code/' + this.produit.code);
  }

  public findAll(): Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(this.url);
  }

  constructor(private http: HttpClient) { }

  get produit(): Produit {
    if(this._produit == null){
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if(this._produits == null){
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }
}
