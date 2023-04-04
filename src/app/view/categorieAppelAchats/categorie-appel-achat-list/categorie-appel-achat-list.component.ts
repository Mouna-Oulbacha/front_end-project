import {Component, OnInit} from '@angular/core';
import {CategorieAppelAchat} from "src/app/controller/model/categorie-appel-achat.model";
import {CategorieAppelAchatService} from "src/app/controller/service/categorie-appel-achat.service";

@Component({
  selector: 'app-categorie-appel-achat-list',
  templateUrl: './categorie-appel-achat-list.component.html',
  styleUrls: ['./categorie-appel-achat-list.component.css']
})
export class CategorieAppelAchatListComponent implements OnInit{

  constructor(private categorieAppelAchatService: CategorieAppelAchatService  ){

  }
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void{
    this.categorieAppelAchatService.findAll().subscribe(data=>this.categorieAppelAchats = data);
  }

  public deleteByCode(categorieAppelAchat: CategorieAppelAchat ,index: number): void{
    console.log('haaa code ' + categorieAppelAchat.code);
    this.categorieAppelAchatService.deleteByCode(categorieAppelAchat.code).subscribe(data=> {
      if (data > 0) {
        this.categorieAppelAchats.splice(index, 1);
      }else{
        alert('DEL ERROR');
      }
    });
  }

  get categorieAppelAchat(): CategorieAppelAchat {
    return this.categorieAppelAchat;
  }

  set categorieAppelAchat(value: CategorieAppelAchat) {
    this.categorieAppelAchat = value;
  }

  get categorieAppelAchats(): Array<CategorieAppelAchat> {
    return this.categorieAppelAchats;
  }

  set categorieAppelAchats(value: Array<CategorieAppelAchat>) {
    this.categorieAppelAchats = value;
  }

}
