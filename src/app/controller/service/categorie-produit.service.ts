import { Injectable } from '@angular/core';
import {CategorieProduit} from "../model/categorie-produit";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService {
  private _categorieProduit: CategorieProduit ;
  private _categorieProduits: Array<CategorieProduit>;
  private url = environment.baseUrl + 'categorieProduit/';
  public save(): Observable<CategorieProduit>{
    return this.http.post<CategorieProduit>(this.url,this.categorieProduit);
  }

  public findAll(): Observable<Array<CategorieProduit>>{
    return this.http.get<Array<CategorieProduit>>(this.url);
  }
  constructor(private http: HttpClient) { }


  get categorieProduit(): CategorieProduit {
    if(this._categorieProduit == null){
      this._categorieProduit = new CategorieProduit();
    }
    return this._categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this._categorieProduit = value;
  }

  get categorieProduits(): Array<CategorieProduit> {
    if(this._categorieProduits == null){
      this._categorieProduits = new  Array<CategorieProduit>();
    }
    return this._categorieProduits;
  }

  set categorieProduits(value: Array<CategorieProduit>) {
    this._categorieProduits = value;
  }

  public deleteByCode( code: String  ): Observable<number>{
    console.log('url ==> ' +this.url + 'code/'+ code);
    return this.http.delete<number>(this.url + 'code/' + this.categorieProduit.code);
  }

}
