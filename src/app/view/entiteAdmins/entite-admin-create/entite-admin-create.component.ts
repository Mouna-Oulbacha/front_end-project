import {Component, OnInit} from '@angular/core';
import {EntiteAdminService} from "../../../controller/service/entite-admin.service";
import {EntiteAdmin} from "../../../controller/model/entite-admin.model";

@Component({
  selector: 'app-entite-admin-create',
  templateUrl: './entite-admin-create.component.html',
  styleUrls: ['./entite-admin-create.component.css']
})
export class EntiteAdminCreateComponent implements OnInit {

  constructor(private entiteAdminService: EntiteAdminService) {
  }

  ngOnInit(): void {

  }

  public save(): void{
    this.entiteAdminService.save().subscribe((data) => {
      if (data != null) {
        this.entiteAdmins.push(this.clone({...this.entiteAdmin}));

        alert('SAVE SUCCESS');
      } else {
        alert('SAVE ERROR ::: REF EXIST');
      } alert (data)
    });
  }

  get _entiteAdmin(): EntiteAdmin {
    return this.entiteAdminService.entiteAdmin;
  }

  set entiteAdmin(value: EntiteAdmin) {
    this.entiteAdminService.entiteAdmin = value;
  }


  get entiteAdmins(): Array<EntiteAdmin> {

    return this.entiteAdminService.entiteAdmins;
  }

  set entiteAdmins(value: Array<EntiteAdmin>) {
    this.entiteAdminService.entiteAdmins = value;
  }

  private clone(entiteAdmin: EntiteAdmin) {
    let myClone=new EntiteAdmin();
    myClone.id = entiteAdmin.id;
    myClone.libelle = entiteAdmin.libelle;
    myClone.code = entiteAdmin.code;
    myClone.categorieEntiteAdmin = entiteAdmin.categorieEntiteAdmin;
    return myClone;
  }
}
