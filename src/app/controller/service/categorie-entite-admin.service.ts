import { Injectable } from '@angular/core';
import {CategorieEntiteAdmin} from "../model/categorie-entite-admin.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {EntiteAdmin} from "../model/entite-admin.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieEntiteAdminService {
  private _categorieEntiteAdmin: CategorieEntiteAdmin;
  private _categorieEntiteAdmins: Array<CategorieEntiteAdmin>;

  constructor(private http:HttpClient) { }
  private Url = environment.baseUrl +'categorieEntiteAdmin/';
  public save(): Observable <CategorieEntiteAdmin>{
    return this.http.post<CategorieEntiteAdmin>(this.Url, this._categorieEntiteAdmin);

  }
  public deleteByCode(code: String ): Observable <number>{
    return this.http.delete<number>(this.Url + 'Code/' + code);
  }
  public findAll(): Observable <Array<CategorieEntiteAdmin>>{
    return this.http.get<Array<CategorieEntiteAdmin>>(this.Url);
  }


  get categorieEntiteAdmin(): CategorieEntiteAdmin {
    if (this._categorieEntiteAdmin== null){
      this._categorieEntiteAdmin=new CategorieEntiteAdmin();
    }
    return this._categorieEntiteAdmin;
  }

  set categorieEntiteAdmin(value: CategorieEntiteAdmin) {
    this._categorieEntiteAdmin = value;
  }

  get categorieEntiteAdmins(): Array<CategorieEntiteAdmin> {
    if (this._categorieEntiteAdmins== null){
      this._categorieEntiteAdmins=new Array<CategorieEntiteAdmin>();
    }
    return this._categorieEntiteAdmins;
  }

  set categorieEntiteAdmins(value: Array<CategorieEntiteAdmin>) {
    this._categorieEntiteAdmins = value;
  }
  public update(index: number, categorieEntiteAdmin: CategorieEntiteAdmin) {
    this.categorieEntiteAdmin=categorieEntiteAdmin;
  }


}

