import {Component, OnInit} from '@angular/core';
import {CategorieEntiteAdminService} from "../../../controller/service/categorie-entite-admin.service";
import {CategorieEntiteAdmin} from "../../../controller/model/categorie-entite-admin.model";

@Component({
  selector: 'app-categorie-entite-admin-list',
  templateUrl: './categorie-entite-admin-list.component.html',
  styleUrls: ['./categorie-entite-admin-list.component.css']
})
export class CategorieEntiteAdminListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private categorieEntiteAdminService: CategorieEntiteAdminService) {
  }


  public deleteByCode(categorieEntiteAdmin: CategorieEntiteAdmin, index: number): void{
    this.categorieEntiteAdminService.deleteByCode(categorieEntiteAdmin.code).subscribe(data=> {
      if (data > 0){
        this.categorieEntiteAdmins.splice(index,1);
      }else{
        alert('DEL ERROR');
      }
    });

  }
  public update(categorieEntiteAdmin: CategorieEntiteAdmin, index: number): void{
    this.categorieEntiteAdminService.update(index, categorieEntiteAdmin);
  }
  public findAll(): void{
    this.categorieEntiteAdminService.findAll().subscribe(data=> this.categorieEntiteAdmins= data);

  }


  get categorieEntiteAdmin(): CategorieEntiteAdmin {
    return this.categorieEntiteAdminService.categorieEntiteAdmin;
  }

  set categorieEntiteAdmin(value: CategorieEntiteAdmin) {
    this.categorieEntiteAdminService.categorieEntiteAdmin = value;
  }


  get categorieEntiteAdmins(): Array<CategorieEntiteAdmin> {

    return this.categorieEntiteAdminService.categorieEntiteAdmins;
  }

  set categorieEntiteAdmins(value: Array<CategorieEntiteAdmin>) {
    this.categorieEntiteAdminService.categorieEntiteAdmins = value;
  }


}


