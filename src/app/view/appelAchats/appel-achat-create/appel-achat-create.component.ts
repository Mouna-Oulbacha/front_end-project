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
    this.appelAchatService.save().subscribe(data => {
      if(data != null){
        this.appelAchats.push({...this.appelAchat});
        this.appelAchatService.appelAchat = null;
        alert('SAVE SUCCESS');
      } else{
        alert('SAVE ERROR :: REF EXIST');

      }
      alert (data)
    })
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

}

