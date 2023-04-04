import {Component, OnInit} from '@angular/core';
import {EntiteAdminService} from "../../../controller/service/entite-admin.service";
import {EntiteAdmin} from "../../../controller/model/entite-admin.model";


@Component({
  selector: 'app-entite-admin-list',
  templateUrl: './entite-admin-list.component.html',
  styleUrls: ['./entite-admin-list.component.css']
})
export class EntiteAdminListComponent implements OnInit  {
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private entiteAdminService: EntiteAdminService) {
  }


  public deleteByCode(entiteAdmin: EntiteAdmin, index: number): void{
    this.entiteAdminService.deleteByCode(entiteAdmin.code).subscribe(data=> {
      if (data > 0){
        this.entiteAdmins.slice(index,1);
      }else{
        alert('DEL ERROR');
      }
    });

  }
  public update(entiteAdmin: EntiteAdmin, index: number): void{
    this.entiteAdminService.update(index, entiteAdmin);
  }

  public findAll(): void{
    this.entiteAdminService.findAll().subscribe(data=> this.entiteAdmins= data);

  }


  get entiteAdmin(): EntiteAdmin {
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
}
