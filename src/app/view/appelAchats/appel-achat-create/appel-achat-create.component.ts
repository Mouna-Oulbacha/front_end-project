import {Component, OnInit} from '@angular/core';
import {AppelAchatService} from "src/app/controller/service/appel-achat.service";
import {AppelAchat} from "src/app/controller/model/appel-achat.model";


@Component({
  selector: 'app-appel-achat-create',
  templateUrl: './appel-achat-create.component.html',
  styleUrls: ['./appel-achat-create.component.css']
})
export class AppelAchatCreateComponent implements OnInit{
  constructor(private appelAchatService: AppelAchatService) {
  }

  ngOnInit(): void {
  }
  public save(): void{
    this.appelAchatService.save().subscribe((data )=> {
      if (data != null) {
        this.appelAchats.push(this.clone({...this.appelAchat}));
        alert('SAVE SUCCESS');
      } else{
        alert('SAVE ERROR :: REF EXIST');
      }alert (data)
    });
  }

  get appelAchat(): AppelAchat {
    return this.appelAchatService.appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this.appelAchatService.appelAchat = value;
  }

  get appelAchats(): Array<AppelAchat> {
    return this.appelAchatService.appelAchats;
  }

  set appelAchats(value: Array<AppelAchat>) {
    this.appelAchatService.appelAchats = value;
  }

  private clone(appelAchat: AppelAchat) {
    let myClone=new AppelAchat();
    myClone.id=appelAchat.id;
    myClone.dateAppelAchat = appelAchat.dateAppelAchat;
    myClone.code = appelAchat.code;
    myClone.total = appelAchat.total;
    myClone.appelAchatProduit = appelAchat.appelAchatProduit;

    return myClone;
  }

}

