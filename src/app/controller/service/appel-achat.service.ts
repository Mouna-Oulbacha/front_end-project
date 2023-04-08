import { Injectable } from '@angular/core';
import {AppelAchat} from "../model/appel-achat.model";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppelAchatService {
  private _appelAchat=new AppelAchat();
  private _appelAchats=new Array<AppelAchat>;
  private url = environment.baseUrl+'appelAchat/'

  public deleteByCode(code: string): Observable<number>{
    console.log('url ==> ' + this.url + 'code/' + code);
    return this.http.delete<number>(environment.baseUrl+'appellAchat/' + 'code/' + this.appelAchat.code);
  }

  public save(): Observable<AppelAchat>{
    return this.http.post<AppelAchat>( environment.baseUrl+'appelAchat/', this.appelAchat);
  }

  public findAll(): Observable<Array<AppelAchat>>{
    return this.http.get<Array<AppelAchat>>(this.url);
  }

  constructor(private http: HttpClient) { }


  get appelAchat(): any {
    if(this._appelAchat == null){
      this._appelAchat = new AppelAchat();
    }
    return this._appelAchat;
  }

  set appelAchat(value: any) {
    this._appelAchat = value;
  }

  get appelAchats(): Array<AppelAchat> {
    if(this._appelAchats == null){
      this._appelAchats = new Array<AppelAchat>();
    }
    return this._appelAchats;
  }

  set appelAchats(value: Array<AppelAchat>) {
    this._appelAchats = value;
  }

  public update(index: number, appelAchat: AppelAchat) {
    this.appelAchat=appelAchat;
  }
}

