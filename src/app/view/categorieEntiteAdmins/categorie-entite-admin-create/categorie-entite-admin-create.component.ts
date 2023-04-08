import {Component, OnInit} from '@angular/core';
import {CategorieEntiteAdminService} from "src/app/controller/service/categorie-entite-admin.service";
import {CategorieEntiteAdmin} from "src/app/controller/model/categorie-entite-admin.model";

@Component({
  selector: 'app-categorie-entite-admin-create',
  templateUrl: './categorie-entite-admin-create.component.html',
  styleUrls: ['./categorie-entite-admin-create.component.css']
})
export class CategorieEntiteAdminCreateComponent implements OnInit {


  constructor(private categorieEntiteAdminService: CategorieEntiteAdminService) {
  }

  ngOnInit(): void {
  }
  public save(): void {
    this.categorieEntiteAdminService.save().subscribe((data )=> {
      if (data != null) {

        this.categorieEntiteAdmins.push(this.clone({...this.categorieEntiteAdmin}));

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: REF EXIST');
      } alert (data)
    });
  }

  get _categorieEntiteAdmin(): CategorieEntiteAdmin {
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
  private clone(categorieEntiteAdmin: CategorieEntiteAdmin) {
    let myClone=new CategorieEntiteAdmin();
    myClone.id=categorieEntiteAdmin.id;
    myClone.libelle = categorieEntiteAdmin.libelle;
    myClone.code = categorieEntiteAdmin.code;

    return myClone;
  }
}


