import { Injectable } from '@angular/core';
import {EntiteAdmin} from "../model/entite-admin.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EntiteAdminService {
  private _entiteAdmin=new EntiteAdmin();
  private _entiteAdmins=new Array<EntiteAdmin>;

  constructor(private http:HttpClient) { }

  private Url = environment.baseUrl + 'entiteAdmin/';

  public save(): Observable <EntiteAdmin>{
    return this.http.post<EntiteAdmin>(environment.baseUrl + 'entiteAdmin/', this.entiteAdmin);

  }
  public deleteByCode(code: String): Observable<EntiteAdmin>{
    return this.http.post<EntiteAdmin>(this.Url, this.entiteAdmin);
  }
/*  public deleteByCode(code: String ): Observable <number>{
    console.log('url ==> ' + this.Url + 'code/' + code);
    return this.http.delete<number>(this.Url + 'Code/' + this.entiteAdmin.code);

  }*/

  public findAll(): Observable <Array<EntiteAdmin>>{
    return this.http.get<Array<EntiteAdmin>>(this.Url);
  }
  get entiteAdmin(): EntiteAdmin {
    if (this._entiteAdmin== null){
      this._entiteAdmin=new EntiteAdmin();
    }
    return this._entiteAdmin;
  }

  set entiteAdmin(value: EntiteAdmin) {
    this._entiteAdmin = value;
  }

  get entiteAdmins(): Array<EntiteAdmin> {
    if (this._entiteAdmins== null){
      this._entiteAdmins=new Array<EntiteAdmin>();
    }
    return this._entiteAdmins;
  }

  set entiteAdmins(value: Array<EntiteAdmin>) {
    this._entiteAdmins = value;
  }

  public update(index: number, entiteAdmin: EntiteAdmin) {
    this.entiteAdmin=entiteAdmin;
  }
}


