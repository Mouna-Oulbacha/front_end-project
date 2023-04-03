import { Component , OnInit} from '@angular/core';
import {AppelAchat} from "../../../controller/model/appel-achat.model";
import {AppelAchatService} from "../../../controller/service/appel-achat.service";

@Component({
  selector: 'app-appel-achat-list',
  templateUrl: './appel-achat-list.component.html',
  styleUrls: ['./appel-achat-list.component.css']
})
export class AppelAchatListComponent {

  constructor(private appelAchatService: AppelAchatService) {
  }
  ngOnInit(): void{
    this.findAll();
  }

  public findAll(): void {
    this.appelAchatService.findAll().subscribe(data => this.appelAchats = data);
  }

  public update(index: number,appelAchat:AppelAchat){
    this.appelAchatService.update(index,appelAchat);
  }

  public deleteByCode(appelAchat: AppelAchat,index: number): void {
    console.log('code' + appelAchat.code);
    this.appelAchatService.deleteByCode(appelAchat.code).subscribe(data => {
      if(data > 0){
        this.appelAchats.splice(index,1);
      }else{
        alert('DEL ERROR');
      }
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

}


