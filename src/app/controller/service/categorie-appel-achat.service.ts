import { Injectable } from '@angular/core';
import {CategorieAppelAchat} from "../model/categorie-appel-achat.model";
import {HttpClient} from "@angular/common/http";
import {AppelAchatProduit} from "../model/appel-achat-produit.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CategorieAppelAchatService {

  private _categorieAppelAchat: CategorieAppelAchat;
  private _categorieAppelAchats: Array<CategorieAppelAchat>;
  private url = environment.baseUrl + '/CategorieAppelAchat';

  public save(): Observable<CategorieAppelAchat>{
    return this.http.post<CategorieAppelAchat> (this.url,this.categorieAppelAchat);
  }
  public deleteByCode(code: string): Observable<number>{
    console.log('urrrrlll ==> ' + this.url + 'code/' + code);
    return this.http.delete<number> (this.url + 'code/' + code);
  }
  public findAll(): Observable<Array<CategorieAppelAchat>>{
    return this.http.get<Array<CategorieAppelAchat>> (this.url );
  }
  constructor(private http: HttpClient) { }


  get categorieAppelAchat(): CategorieAppelAchat {
    if(this.categorieAppelAchat == null){
      this.categorieAppelAchat = new CategorieAppelAchat();
    }

    return this.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this.categorieAppelAchat = value;
  }

  get categorieAppelAchats(): Array<CategorieAppelAchat> {
    if(this.categorieAppelAchats == null){
      this.categorieAppelAchats = new Array<CategorieAppelAchat>();
    }
    return this.categorieAppelAchats;
  }

  set categorieAppelAchats(value: Array<CategorieAppelAchat>) {
    this.categorieAppelAchats = value;
  }


}
